import Vue from 'vue'
import Vuex from 'vuex'
import {auth , db} from '@/firebase' 
import router from '@/router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {},
    imagenes: null,
    carga:false
  },
  mutations: {
    nuevoUsuario(state , payload) {
      if(payload === null || payload === {}) {
        state.usuario =  {}
      } else {
        state.usuario = payload;
      }
    },
    cargarImagenes (state , payload) {
      state.imagenes = payload;
    },
    setCarga(state, value){
      state.carga = value;
    }

  },
  actions: {
    async setUsuario({commit} , payload) {
      let n = payload.displayName !== undefined ? payload.displayName : payload.nombre;
      let f = payload.photoURL !== undefined ? payload.photoURL : payload.foto;
      const usuario = {
        nombre: n,
        email: payload.email,
        uid:payload.uid,
        foto:f
      }
      console.log("usuario " , usuario);
      const doc = await db.collection('usuarios').doc(payload.uid).get()
      if (doc === undefined) {
        if(!doc.exists){
          commit('nuevoUsuario' , doc.data())
        } else {
          await db.collection('usuarios').doc(usuario.uid).set(usuario)
          commit('nuevoUsuario' , usuario)
        }
      } else {
        await db.collection('usuarios').doc(usuario.uid).set(usuario)
        commit('nuevoUsuario' , usuario)
      }
    },
    cerrarSession({commit}){
      auth.signOut();
      commit('nuevoUsuario', {})
      router.push({name:'Ingreso'})
    },
    async saveImages({commit},image){
      const doc = await db.collection('images').add({name: image.name , url:image.url , uid:image.uid})
      //console.log('image saved ', doc);
    },
    async getImages({commit},uid){
      console.log(' gettting images  uid: ' , uid)
      const imageness = []
       await db.collection('images').where("uid", "==" ,uid).get()
      .then( imgns => {
        imgns.forEach(img => {
          let imag = img.data()
          imag.id = img.id
          imageness.push(imag)
        })
        commit('cargarImagenes' , imageness)
      })

    },
    loader({commit} , value){
      commit('setCarga', value)
    }
  },
  modules: {
  }
})
