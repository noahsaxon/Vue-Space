<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="createUsuario({email:$v.email.$model , password: $v.pass1.$model})">
            <input type="email" placeholder="Ingrese Email" v-model="$v.email.$model"  class="form-control my-2">
            <small class="text-danger d-block" v-if="!$v.email.required"> Campo Requerido.</small>

            <input type="password" placeholder="Password" v-model="$v.pass1.$model"  class="form-control my-2">
            <small class="text-danger d-block" v-if="!$v.pass1.required"> Campo Requerido</small>
            <small class="text-danger d-block" v-if="!$v.pass1.minLength"> Minimo 6 caracteres</small>
            <input type="password" placeholder="Repeat vPassword"  v-model="$v.pass2.$model"  class="form-control my-2">            
            <small class="text-danger d-block" v-if="!$v.pass1.sameAs"> Contrasena no coincide</small>
            <button type="submit" class="btn btn-primary" :disabled="!desactivar">Crear Usuario</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>


<script>

import {mapActions , mapState} from 'vuex';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
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
        pass2: {
            required,
            sameAs:sameAs('pass1')
        }
    }
}
</script>