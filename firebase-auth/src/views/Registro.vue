<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="createUsuario({email:$v.email.$model , password: $v.pass1.$model})">
            <input type="email" placeholder="Ingrese Email" v-model="$v.email.$model"  class="form-control my-2">
            <input type="password" placeholder="Password" v-model="$v.pass1.$model"  class="form-control my-2">
            <input type="password" placeholder="Repeat vPassword"  v-model="pass2"  class="form-control my-2">
            <button type="submit" class="btn btn-primary" :disabled="!desactivar">Crear Usuario</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>


<script>

import {mapActions , mapState} from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name:'Registro',
    data(){
        return {
            email:'',
            pass1:'',
            pass2:''
        }
    },
    methods: {
        ...mapActions(['createUsuario'])
    },
    computed:{
        ...mapState(['error']),
        desactivar(){
            return this.pass1 === this.pass2 && this.pass1 != ''
        }
    },
    validations:{
        email: {
            required, email
        },
        pass1: {
            required,
            minLength:minLength(6)
        },
    }
}
</script>