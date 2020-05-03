<template>
    <div>
        <h1>Ingreso</h1>
        <form @submit.prevent="IngresoUsuario({email:email , pass:pass})">
            <input type="text" v-model="email">
            <input type="password" v-model="pass">
            <button>acceder</button>
        </form>
        <p>{{error}}</p>
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