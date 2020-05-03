import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario : '',
    error: ''
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload 
    },
    setError(state, payload){
      state.error = payload
    }
  }, 
  actions: {
    createUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then( res =>{
        commit('setUsuario' , {email: res.user.email , uid:res.user.uid})
        router.push({name:'inicio'})
      }).catch(function(error) {
        commit('setError' , error.message)
      });
    },
    IngresoUsuario({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass).then( res => {
        commit('setUsuario', {email:res.user.email , iud:res.user.uid })
        router.push({name:'inicio'})
      })
      .catch(function(error) {
        commit('setError' , error.message)
      });

    },
    detectarUsuario({commit}, payload){
      if(payload != null ){
        commit('setUsuario' , {email:payload.email , uid:payload.uid})
      } else {
        commit('setUsuario' , null)        
      }

    },
    cerrarSession({commit}){
      firebase.auth().signOut().then(function() {
        commit('setUsuario' , null)
        router.push({name:'ingreso'})
      }).catch(function(error) {
        console.log(errors)
      });

    }
  },
  getters: {
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false;
      } else {
        return true;
      }
    }
  },
  modules: {
  }
})
