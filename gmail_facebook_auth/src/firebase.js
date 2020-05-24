import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCOCROY4mq25AUs8ns5lNso-zQ24SI5DQk",
    authDomain: "facebook-auth-358fc.firebaseapp.com",
    databaseURL: "https://facebook-auth-358fc.firebaseio.com",
    projectId: "facebook-auth-358fc",
    storageBucket: "facebook-auth-358fc.appspot.com",
    messagingSenderId: "1050177481033",
    appId: "1:1050177481033:web:fdab1c0353c664039bd298",
    measurementId: "G-BDRLQ3TW2M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//  firebase.analytics();

  const db  = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export  {firebase , db  , auth  , storage}

