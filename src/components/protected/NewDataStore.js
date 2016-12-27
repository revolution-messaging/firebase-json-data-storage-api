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
      jsonText: ""
    }
  }

  componentDidMount() {
    // something will happen here...
  }

  updateEditorValue(newValue) {

  }

  saveResource() {
    let data = {};
    let keyname = this.refs.keyname.value
    let value = JSON.parse(this.refs.ace.editor.getValue())
    let db_ref = firebase.database().ref().child(keyname);
    
    db_ref.set(value)
      .then(() => {
      	console.log("success")
      }).catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
				<p> Give this resource a name, the name given is the key path.</p>
				<label htmlFor="resource-key">Resource Key</label>
				<div className="input-group">
					<input id="resource-key" ref="keyname" type="text" className="form-control" placeholder="leading_data_pie_chart_1" required="true" />
					<span className="input-group-btn">
						<button onClick={this.saveResource.bind(this)} className="btn btn-success" type="button">Save Resource</button>
					</span>
				</div>
				 <br/>
				 <p>Paste JSON here.</p>
				 <AceEditor ref="ace" mode="json" theme="monokai" name="UNIQUE_ID_OF_DIV" width="100%" />
			</div>
    )
  }
}
