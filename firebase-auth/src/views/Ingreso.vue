<template>
    <div class="container mt-5" align-v="center">
        <b-container class="col-md-6">
            <h1 class="mb-4"> Ingreso</h1>
            <form @submit.prevent="IngresoUsuario({email:email , pass:pass})">
                <b-form-input v-model="email" placeholder="Enter your Email"></b-form-input>
                <b-form-input type="password" v-model="pass" placeholder="Enter your Password"></b-form-input>
                <b-button type="submit" class="mt-2">Acceder</b-button>
            </form>
            <p>{{error}}</p>      
        </b-container>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

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
    }
}
</script>