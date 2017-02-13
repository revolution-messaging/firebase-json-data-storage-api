# JSON Data Store


## What is this?
---
The JSON Data Store is a basic utility that is based on [Firebase](https://firebase.google.com/)
that allows for the quick creation of an endpoint to store JSON. It is designed to allow the load to be placed onto the client for data requests and remove the need for storage of data on wordpress or static sites. The reason we use Firebase over something like S3 is that it the JSON Data Store application allows for live or quick updates to the data.

Writing to the database is restricted to users based on the `@revolutionmessaging` domain in firebase.
The API key is public knowledge as most firebase apps allow reading and writing. However in our use case we would only 
like our developers to be able to write to the real time db. Hence the setup of these rules.

**All data is readable by the public so do not store sensitive information in the JSON Data Store.**

Data is stored at endpoints of a JSON store name.

```
https://somefirebasedatabase-firebaseio.com/:data_store_name.json
```
This then returns the JSON data. 

**Each name must be unique.**

## How do I use it? 
---
First navigate to Dashboard and then Sign In with your RevMSG account. If you do not do this you will redirected back to this page. Once Signed in you will see a populated table with example data stores. A data store name is labled by **name** and is unique. If a store is created with the exact same name the data will be overwritten. These **names** are Firebase child keys and also the endpoints for the JSON data. In the table the **URL** is the REST endpoint firebase creates for your data. This is designed to be used as only a GET request but other methods are supported. Check out the firebase API docs [here](https://firebase.google.com/docs/reference/rest/database/) for those methods.

To create a new JSON Store 
1. Click on **New DataStore**
2. Name the DataStore using **snakecase** if using more than one word. (*example_stuff_1*)
3. Enter or paste in some JSON into the editor
4. Click Save Resource

You will then be taken back to the table and can view the endpoint and call your JSON externally. 


## Whats the code ?
---
Anyone has access to this data so we do not need to authenticate or worry about headers. A simple AJAX request will work for getting the data we need. 

An example request using jQuery to get out data looks like.

```
$.get('https://bmgf-datastore.firebaseio.com/example_data.json')
.done((data) => {
	console.log(data)
}).fail((error) => {
    console.error(error)
})
;
```

This will then return our JSON object ready to use for later in the process!

## Development 
---

Clone down this project to get started, then run

```
npm install
```
and firebase init. If you do not have the firebase cli install with 

```
npm install -g firebase-tools
```


To start the dev server run
```
npm start
```
to build for production and before running firebase deploy make sure to run build
```
npm run build
```

To configure this application to your own firebase instance,
look under `config/constants` and enter your own `apiKey`,  `authDomain`
and `databaseURL` from your firebase application.
