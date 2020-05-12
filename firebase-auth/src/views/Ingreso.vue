<template>
    <div class="container mt-5" align-v="center">
        <b-container class="col-md-6">
            <h1 class="mb-4"> Ingreso</h1>
            <form @submit.prevent="IngresoUsuario({email:$v.email.$model , pass:$v.pass.$model})">
                <b-form-input v-model="$v.email.$model" placeholder="Enter your Email" class="form-control my-2"></b-form-input>
                <small class="text-danger" v-if="!$v.email.required">Email requerido</small>
                <small class="text-danger" v-if="!$v.email.email">Email no valido</small>
                <b-form-input type="password" v-model="$v.pass.$model" placeholder="Enter your Password"  class="form-control my-2"></b-form-input>
                <small class="text-danger" v-if="!$v.pass.required">Password requerido</small>
                <small class="text-danger" v-if="!$v.pass.minLength">Minimo 6 caracteres</small>
                <br>
                <b-button type="submit" class="mt-2" :disabled="$v.$invalid"> Acceder</b-button>
            </form>
            <p>{{error}}</p>      
        </b-container>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name:'Ingreso',
    data(){
        return {
            email:'',
            pass:''
        }
    },
    methods: {
        ...mapActions(['IngresoUsuario'])
    },
    computed: {
        ...mapState(['error'])
    },
    validations:{
        email: {
            required, email
        },
        pass: {
            required,
            minLength:minLength(6)
        },
    }
}
</script>