import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCldHSC3dTcjCabGi7X_K6RyFg2xjI2W7Y",
    authDomain: "blog-task.firebaseapp.com",
    databaseURL: "https://blog-task.firebaseio.com",
    projectId: "blog-task",
    storageBucket: "blog-task.appspot.com",
    messagingSenderId: "758334326476",
    appId: "1:758334326476:web:ea69795884524d7295a469"
  };

//  // Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

  const db  = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export  {firebase , db  , auth  , storage}






