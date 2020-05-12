<template>
    <div>
        <div class="text-center"> 
            <h3>Ruta protegida</h3>
            Bienvenido {{usuario.email}}!
        </div>

         <h2 class="mb-4"> Lista de Tareas</h2>
            <router-link :to="{name: 'agregar'}">
                <button class="btn btn-success btn-block col-md-1">Agregar</button>
            </router-link>

            <div v-if="carga" class="text-center mt-5">
                <h3>Cargando contenido</h3>
                <b-spinner type="grow" variant="success" label="Loading..."></b-spinner>
            </div>

         <ul class="list-group mt-5" v-if="!carga">
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
        ...mapState(['tareas' , 'usuario' , 'carga'])
    }
    
}
</script>