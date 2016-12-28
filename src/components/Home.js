import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        Welcome to the JSON data store. Here you can store JSON data for projects !
        Login to get started or click on the Dashboard to see existing data or to create new data.
      <h1><a id="JSON_Data_Store_0"></a>JSON Data Store</h1>
			<h3><a id="What_is_this_1"></a>What is this?</h3>
			<p>The JSON Data Store is a basic utility that is based on <a href="www.google.firebase.com">Firebase</a> that allows for the quick creation of an endpoint to store JSON. It is designed to allow the load to be placed onto the client for data requests and remove the need for storage of data on wordpress or static sites. The reason we use Firebase over something like S3 is that it the JSON Data Store application allows for live or quick updates to the data.</p>
			<p><strong>All data is readable by the public so do not store sensetive information in the JSON Data Store.</strong></p>
			<h3><a id="How_do_I_use_it_7"></a>How do I use it?</h3>
			<p>First navigate to Dashboard and then sign in with your revolutionmessaging.com account. If you do not do this you will redirected back to this page. Once Signed in you will see a populated table with example data stores. A data store name is labled by <strong>name</strong> and is unique. If a store is created with the exact same name the data will be overwritten. These <strong>names</strong> are Firebase child keys and also the endpoints for the JSON data. In the table the <strong>URL</strong> is the REST endpoint firebase creates for your data. This is designed to be used as only a GET request but other methods are supported. Check out the firebase API docs <a href="https://firebase.google.com/docs/reference/rest/database/">here</a> for those methods.</p>
			<p>To create a new JSON Store</p>
			<ol>
				<li>Click on <strong>New DataStore</strong></li>
				<li>Name the DataStore using <strong>snakecase</strong> if using more than one word. (<em>example_stuff_1</em>)</li>
				<li>Enter or paste in some JSON into the editor</li>
				<li>Click Save Resource</li>
			</ol>
		<p>You will then be taken back to the table and can view the endpoint and call your JSON externally.</p>
		<h3><a id="Whats_the_code__18"></a>Whats the code ?</h3>
		<p>Anyone has access to this data so we do not need to authenticate or worry about headers. A simple AJAX request will work for getting the data we need.</p>
		<p>An example request using jQuery to get out data looks like.</p>
	<pre>
		<code>
		{
						`"$.get('https://bmgf-datastore.firebaseio.com/example_data.json')
						.done((data) => {
						    console.log(data)
						// do with this what you wish!
						}).fail((error) => {
						    console.error(error)
						// do not forget to handle errors
						});`
		}
	</code>
</pre>
<p>This will then return our JSON object ready to use for later in the process!</p>
      </div>
    )
  }
}