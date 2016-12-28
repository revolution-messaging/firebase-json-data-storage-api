import React, { Component } from 'react'
import firebase from 'firebase'
import NewDataStoreEditor from './NewDataStore'
import EditDataStoreEditor from './EditDataStoreEditor'
import ResourcesTable from './ResourcesTable'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_store: false,
      editing: false,
      editing_database_name: ""
    }
  }

  componentWillMount() {

  }

  editData(db_name) {
    this.setState({
      editing_database_name: db_name,
      editing: true
    })
  }

  createNewDataStore() {
    this.setState({ new_store: true })
  }

  hideNewDataStoreEditor() {
    this.setState({ new_store: false })
  }

  hideEditDataStoreEditor() {
    this.setState({ editing: false })
  }

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-lg-12">
        {
          this.state.new_store ? <NewDataStoreEditor hideNewDataStoreEditor={this.hideNewDataStoreEditor.bind(this)} /> : ""
        } 
        
        {
          this.state.new_store || this.state.editing ? "" : <button onClick={this.createNewDataStore.bind(this)} className="btn btn-primary">New DataStore </button> 
        }

        {
          this.state.editing ?  <EditDataStoreEditor database={this.state.editing_database_name} 
          hideEditDataStoreEditor={this.hideEditDataStoreEditor.bind(this)} /> : ""
        }
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        { this.state.new_store || this.state.editing ? "" : <ResourcesTable showEditor={this.editData.bind(this)} /> }
        </div>
      </div>
      </div>
    )
  }
}
