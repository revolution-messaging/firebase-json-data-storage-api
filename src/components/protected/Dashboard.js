import React, { Component } from 'react'
import firebase from 'firebase'
import NewDataStoreEditor from './NewDataStore'
import ResourcesTable from './ResourcesTable'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  componentWillMount() {

  }

  createNewDataStore(){
  	this.setState({editing:true})
  }

  render() {
    return (
      <div>
      <div className="row">
      	<div className="col-lg-12">
      	{
      		this.state.editing ? <NewDataStoreEditor /> : 
      		<button onClick={this.createNewDataStore.bind(this)} className="btn btn-primary">New DataStore </button> 
      	} 
      	</div>
      </div>
      <div className="row">
      	<div className="col-lg-12">
      	{this.state.editing ? "" : <ResourcesTable /> }
      	</div>
      </div>
      </div>
    )
  }
}
