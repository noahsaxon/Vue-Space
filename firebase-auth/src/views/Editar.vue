<template>
    <div>
        <h1>Editar </h1>
        <form @submit.prevent="editarTarea(tarea)" class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">Nombre</div>
            </div>
                <input type="text" class="form-control" v-model="$v.tarea.nombre.$model" >
            </div>
            <button type="submit" class="btn btn-primary mb-2"  :disabled="$v.tarea.$invalid || carga" >Editar</button>
        </form>
        {{$v.tarea}}
            <small v-if="!$v.tarea.nombre.required" class="text-danger">Campo requerido</small>
            <small v-if="!$v.tarea.nombre.minLength" class="text-danger">Minimo 4 caracteres</small>
    </div>
</template>


<script>
import {mapActions , mapState} from 'vuex'
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
    name:'Editar',
    data(){
        return {id:this.$route.params.id}
    },
    methods: {
        ...mapActions(['getTarea' , 'editarTarea'])
    },
    created(){
        this.getTarea(this.id)
    },
    computed: {
        ...mapState(['tarea', 'carga'])
    },
    validations:{
        tarea: {
            nombre:{required , minLength:minLength(4)}
        }
    }
}
</script>