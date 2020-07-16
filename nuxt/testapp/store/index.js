import { db } from '@/plugins/firebase.js'

export const state = () => ({

})
  
export const mutations = {
    setTareas(state , payload){
        console.log(payload)
        state.tareas = payload;
    },
    setTarea(state , payload){
        console.log("Agregando Tarea!")
        state.tareas.push(payload);
    }
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        return db.collection('tareas').get().then(query => {
            const tareas = [] 
            query.forEach(element => {
                let tarea = element.data();
                tarea.id = element.id;
                tareas.push(tarea);
            });
            return commit('setTareas' , tareas)
        }).catch(function (error) {
            console.log(error)
        })
    },
    async agregarTarea({commit} , tarea) {
        try {
            const doc = await db.collection('tareas').add({
                nombre: tarea,
                fecha: new Date()
            });

            commit('setTarea' , {nombre:tarea , id: doc.id});
        } catch (error) {
            console.log(error)
        }

    }
}
    
