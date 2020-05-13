import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import db from '../main'
var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre:'' , id:''},
    usuario : '',
    error: '',
    carga:false,
    texto:''
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload 
    },
    setError(state, payload){
      state.error = payload
    },
     setTareas(state, tareasAct) {
      state.tareas = tareasAct
    },
    setTarea(state , tarea){
      state.tarea = tarea
//      state.tareas.push(tarea)
    },
    eliminarTareas(state , id){
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id
      })
    },
    cargarFirebase(state , payload) {
      state.carga = payload
    }
  },
  actions: {
    buscador({commit , state} , payload){
      console.log(payload)
      state.texto = payload.toLowerCase();
    },
    createUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then( res =>{

        commit('setUsuario' , {email: res.user.email , uid:res.user.uid})
        db.collection(res.user.uid).add({
          nombre:"Tarea de Ejemplo"
        }).then((doc)=> {
          router.push({name:'inicio'})
        })
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
    },
    getTareas({commit}){
      const tareas = [];
      commit('cargarFirebase' , true);
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.uid).get()
      .then( snapshot => {

        snapshot.forEach(doc => {

          let tarea = doc.data()
          tarea.id = doc.id
          tareas.push(tarea)
          commit('cargarFirebase' , false);
         })

        commit('setTareas', tareas)

      })
    }, 
    getTarea({commit} , id){
      const usuario = firebase.auth().currentUser;      
      db.collection(usuario.uid).doc(id).get()
      .then(doc => {
        let tarea = doc.data();
        tarea.id = doc.id;
        commit('setTarea' , tarea)
      })
    },
    editarTarea({commit}, tarea){
      const usuario = firebase.auth().currentUser;      
      commit('cargarFirebase' , true);
      db.collection(usuario.uid).doc(tarea.id).update({
        nombre: tarea.nombre
      }).then(()=>{
        commit('cargarFirebase' , false);
        router.push({name:'inicio'})
      })
    },
    agregarTarea({commit} , nombre){
      const usuario = firebase.auth().currentUser;    
      commit('cargarFirebase' , true);
      db.collection(usuario.uid).add({
        nombre
      }).then((doc)=> {
        commit('cargarFirebase' , false);
        console.log(doc.id)
        router.push({name:'inicio'})
      })
    },
    eliminarTareas({commit, dispatch} , id){
      const usuario = firebase.auth().currentUser;    
      db.collection(usuario.uid).doc(id).delete().then( () => {
        console.log('Tarea eliminada.')
        commit('eliminarTareas',id)
      })
    }
  },
  getters: {
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false;
      } else {
        return true;
      }
    },
    arrayFiltrado(state){ 
      let arregloFiltrado = []
      for ( let tarea of state.tareas)  {

        let nombre = tarea.nombre.toLowerCase();
        if(nombre.indexOf(state.texto) >=0 ){
          arregloFiltrado.push(tarea);
        }
      }
      return arregloFiltrado;
    }
  },
  modules: {
  }
})
