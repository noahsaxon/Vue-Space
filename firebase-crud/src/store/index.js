import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[],
    tarea: {nombre: '', id:''}
  },
  mutations: {
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
    }
  },
  actions: {
    getTareas({commit}){
      const tareas = [];

      db.collection('tareas').get()
      .then( snapshot => {

        snapshot.forEach(doc => {

          let tarea = doc.data()
          tarea.id = doc.id
          tareas.push(tarea)

         })

        commit('setTareas', tareas)

      })
    }, 
    getTarea({commit} , id){
      db.collection('tareas').doc(id).get()
      .then(doc => {
        let tarea = doc.data();
        tarea.id = doc.id;
        commit('setTarea' , tarea)
      })
    },
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      }).then(()=>{
        router.push({name:'inicio'})
      })
    },
    agregarTarea({commit} , nombre){
      db.collection('tareas').add({
        nombre
      }).then((doc)=> {
        console.log(doc.id)
        router.push({name:'inicio'})
      })
    },
    eliminarTareas({commit, dispatch} , id){
      db.collection('tareas').doc(id).delete().then( () => {
        console.log('Tarea eliminada.')
//        dispatch('getTareas')
        commit('eliminarTareas',id)
      })
    }
  },
  modules: {
  }
})
