import React, { Component } from 'react'
import firebase from 'firebase'
import { ref, firebaseAuth } from "../../config/constants"
import AceEditor from 'react-ace'
import brace from 'brace';
import 'brace/theme/monokai';
import 'brace/mode/json';


export default class EditDataStoreEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebase_key: "",
      jsonText: "",
      editor_value: ""
    }
  }

  componentDidMount() {
    let dataRef = firebase.database().ref().child(this.props.database || "")
    dataRef.once('value').then((data) => {
        this.setState({
          editor_value: JSON.stringify(data.val(), null, "  "),
          firebase_key: this.props.database
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  saveResource() {
    let data = {};
    let keyname = this.refs.keyname.value
    let value = JSON.parse(this.refs.ace.editor.getValue())
    let db_ref = firebase.database().ref().child(keyname);

    db_ref.set(value)
      .then(() => {
        this.hideComponent();
      }).catch((e) => {
        console.log(e)
      })
  }

  hideComponent() {
    this.props.hideEditDataStoreEditor();
  }

  render() {
    return (
      <div>
      <div className="row">
      <div className="col-lg-12">
        <p> Give this resource a name, the name given is the key path.</p>
        </div>
      </div>
        <label htmlFor="resource-key">Resource Key</label>
        <div className="input-group">
          <input value={this.state.firebase_key} id="resource-key" ref="keyname" type="text" className="form-control" placeholder="leading_data_pie_chart_1" required="true" />
          <span className="input-group-btn">
            <button onClick={this.saveResource.bind(this)} className="btn btn-success" type="button">Save Resource</button>
            <button className="btn btn-danger" onClick={this.hideComponent.bind(this)}>Cancel</button>
          </span>
        </div>
         <br/>
         <p>Paste JSON here.</p>
         <AceEditor value={this.state.editor_value} wrapEnabled={true}  editorProps={{$blockScrolling: true}} ref="ace" mode="json" theme="monokai" name="UNIQUE_ID_OF_DIV" width="100%" />
      </div>
    )
  }
}
