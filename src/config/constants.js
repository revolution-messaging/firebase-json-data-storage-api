import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDT8Wk0xCVAFYGHfVsJrKreerwUnCxMtGc",
  authDomain: "bmgf-datastore.firebaseapp.com",
  databaseURL: "https://bmgf-datastore.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const provider = new firebase.auth.GoogleAuthProvider()
