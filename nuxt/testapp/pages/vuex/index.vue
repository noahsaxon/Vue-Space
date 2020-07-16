<template>
<div class="container-fluid ml-5 mr-5">
        <div class="row col-md-12">
            <h2>Vuex</h2>
        </div>
        <form @submit.prevent="agregarTarea(tarea)">
            <input type="text" class="form-control mb-2" v-model="tarea" >
            <b-button type="submit">Agregar</b-button>
        </form>
        <hr>
        <div class="row col-md-12">

          <ul class ="col-md-12">
                    <li v-for="(item , index) in tareas " :key="index" >
                    {{item.nombre}}
                    <b-button class="btn btn-warning"> Editar</b-button>
                    <b-button class="btn btn-danger"> Borrar</b-button>
                    <hr>
                    </li>
                </ul>

    </div>
</div>
</template>

<script>

import { db } from '@/plugins/firebase.js'
import {mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['agregarTarea'])
    },
    data() {
        return {
            tarea:''
        }
    }
//    fetch({store}){
//        return db.collection('tareas').get().then( query =>  {
//            if(query !== undefined) {
//                const tareas = []
//                query.forEach( element => {
//                    tareas.push(element.data())
//                })
//                return store.commit('setTareas', tareas)
//            }
//        }).catch(function (error) {
//            console.log(error)
//        })
//    }
}
</script>