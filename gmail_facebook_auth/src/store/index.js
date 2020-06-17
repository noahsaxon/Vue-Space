import Vue from 'vue'
import Vuex from 'vuex'
import {auth , db} from '@/firebase' 
import router from '@/router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {}
  },
  mutations: {
    nuevoUsuario(state , payload) {

      if(payload === null) {
        state.usuario =  ''
      } else {
        state.usuario = payload;
      }
    } 
  },
  actions: {
    async setUsuario({commit} , payload) {
      const doc = await db.collection('usuarios').doc(payload.uid).get()
      if(doc.exists){
        commit('nuevoUsuario' , doc.data())
      } else {
        const usuario = {
          nombre: payload.displayName,
          email: payload.email,
          uid:payload.uid,
          foto:payload.photoURL
        }
        await db.collection('usuarios').doc(userdata.uid).set(usuario) 
        commit('nuevoUsuario' , usuario)        
      }

    },
    cerrarSession({commit}){
      auth.signOut();
      commit('nuevoUsuario', '')
      router.push({name:'Ingreso'})
    }
  },
  modules: {
  }
})
