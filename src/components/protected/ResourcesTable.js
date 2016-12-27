import React, { Component } from 'react'
import { Link } from 'react-router'
import firebase from 'firebase'

export default class ResourcesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStores: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json")
    fetch('https://bmgf-datastore.firebaseio.com/.json?shallow=true', { headers: headers, method: 'get' })
      .then((resp) => {
        return resp.json()
      }).then((data) => {
        let dataStores = []
        for (const key in data) {
          dataStores.push({ url: `https://bmgf-datastore.firebaseio.com/${key}.json`, db_name: key })
        }
        this.setState({ dataStores })
      }).catch((err) => {
        console.error(err)
      });
  }

  render() {

  	let databases = this.state.dataStores || []
  	let database_table_rows = databases.map((database) => {
  		return (
  			<tr key={database.db_name}>
  				<td>{database.db_name}</td>
  				<td><Link target="_blank" to={database.url}>{database.url}</Link></td>
  				<td>Edit</td>
  			</tr>
  		)
  	})

    return (
      <div>
			<br/>
			<div className="panel panel-default">
			  <div className="panel-heading">Existing Resources</div>
					<table className="table">
				    <thead>
			        <tr>
			          <th>DB Name</th>
			          <th>URL</th>
			          <th>Edit</th>
			         </tr>
					    </thead>
					    <tbody>
					    	{database_table_rows}
					    </tbody>
					</table>
				</div>
			</div>
    )
  }
}
