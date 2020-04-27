import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBXdlV73GZEIlDoPn5X6wNmez_WgEeu-K8",
    authDomain: "crud-vue-a1.firebaseapp.com",
    databaseURL: "https://crud-vue-a1.firebaseio.com",
    projectId: "crud-vue-a1",
    storageBucket: "crud-vue-a1.appspot.com",
    messagingSenderId: "710815572111",
    appId: "1:710815572111:web:46dca4097fcea3529450fa",
    measurementId: "G-FJX7TWKQ3Y"
  }; 

  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebaseApp.firestore().settings({})

export default firebase.firestore();