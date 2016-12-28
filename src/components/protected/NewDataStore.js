import React, { Component } from 'react'
import firebase from 'firebase'
import { ref, firebaseAuth } from "../../config/constants"
import AceEditor from 'react-ace'
import brace from 'brace';
import 'brace/theme/monokai';
import 'brace/mode/json';


export default class NewDataStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebase_key: "",
      jsonText: "",
      error:""
    }
  }

  componentDidMount() {
    // something will happen here...
  }

  updateEditorValue(newValue) {

  }

  saveResource() {
    try {
      let data = {};
      let keyname = this.refs.keyname.value

      if (!keyname) {
        this.setState({error:"Please provide a keyname for this data store."})
        return
      } else if(keyname.includes(" ")){
        this.setState({error:"Key names should only be snake cased. IE: new_data_store"})
        return
      }

      let value = JSON.parse(this.refs.ace.editor.getValue())
      let db_ref = firebase.database().ref().child(keyname);

      db_ref.set(value)
        .then(() => {
          this.hideComponent();
        })
    } catch (e) {
      console.error(e);
      this.setState({error:"Error Parsing your JSON, provide valid JSON."})
    }
  }

  hideComponent() {
    this.props.hideNewDataStoreEditor();
  }

  render() {
    return (
      <div>
      <div className="row">
      <div className="col-lg-12">
        {
          this.state.error.length ? <h4 className="error">{this.state.error}</h4> : 
          <p> Give this resource a name, the name given is the key path.</p>
        }
        </div>
      </div>
        <label htmlFor="resource-key">Resource Key</label>
        <div className="input-group">
          <input id="resource-key" ref="keyname" type="text" className="form-control" placeholder="leading_data_pie_chart_1" required="true" />
          <span className="input-group-btn">
            <button onClick={this.saveResource.bind(this)} className="btn btn-success" type="button">Save Resource</button>
            <button className="btn btn-danger" onClick={this.hideComponent.bind(this)}>Cancel</button>
          </span>
        </div>
         <br/>
         <p>Paste JSON here.</p>
         <AceEditor ref="ace" mode="json" theme="monokai" name="UNIQUE_ID_OF_DIV" width="100%" />
      </div>
    )
  }
}
