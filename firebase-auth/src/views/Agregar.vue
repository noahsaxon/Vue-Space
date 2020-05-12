<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea(nombre)" class="form-inline">

            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">Nombre</div>
            </div>
                <input type="text" class="form-control" v-model="$v.nombre.$model" >

            </div>
            <button  type="submit" :disabled="$v.$invalid || carga" class="btn btn-primary mb-2">Agregar</button>
        </form>
            <small v-if="!$v.nombre.required" class="text-danger">Campo requerido</small>
            <small v-if="!$v.nombre.minLength" class="text-danger">Minimo 4 caracteres</small>
    </div>
</template>


<script>
import {mapActions , mapState} from 'vuex'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    name:'Agregar',
    data(){
        return {
            nombre:''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    },
    validations:{
        nombre:{required , minLength:minLength(4)}
    },
    computed: {
        ...mapState(['carga'])
    }
}
</script>