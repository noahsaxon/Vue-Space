import Vue from 'vue'
import Vuex from 'vuex'

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
        console.log(res)
        commit(setUsuario , {email: res.user.email , uid:res.user.uid})
      }).catch(function(error) {
        commit('setError' , error.message)
      });
    }
  },
  modules: {
  }
})
