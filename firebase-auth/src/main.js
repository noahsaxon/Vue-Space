import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


var firebase = require("firebase/app")

require("firebase/auth")
require("firebase/firestore")

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

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  if (user) {
    store.dispatch('detectarUsuario' , {email: user.email , uid:user.uid})
  } else {
    store.dispatch('detectarUsuario' , null)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
