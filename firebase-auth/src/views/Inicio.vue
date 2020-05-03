<template>
    <div>
        <div>
            <h1>Ruta protegida</h1>
            Bienvenido {{usuario.email}}!
        </div>

         <h2>Lista de Tareas</h2>
            <router-link :to="{name: 'agregar'}">
                <button class="btn btn-success btn-block">Agregar</button>
            </router-link>

         <ul class="list-group mt-5">
             <li v-for="item of tareas" :key="item.id" class="list-group-item"> 
                 {{item.id}} - {{item.nombre}}
                 <div class="float-right">
                <router-link :to="{name:'editar' , params: {id:item.id}}" class="mr-2 " >
                        <button class="btn btn-info btn-sm">Editar</button>
                </router-link>
                  <button class="btn btn-danger btn-sm"  @click="eliminarTareas(item.id)">Eliminar</button>
                 </div>
             </li>

         </ul>
    </div>
</template>


<script>

import {mapActions, mapState } from 'vuex'

export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas', 'eliminarTareas'])
    },
    created(){ 
        this.getTareas();
    },
    computed:{
        ...mapState(['tareas' , 'usuario'])
    }
    
}
</script>