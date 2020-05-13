<template>
    <div>
        <h1>Vuelidate</h1>
        <form @submit.prevent="submit">
            <input type="email" placeholder="Ingresa un email"  v-model.lazy="$v.email.$model" class="form-control my-3" :class="{'is-invalid': $v.email.$error}">
            <p class="text-danger" v-if="!$v.email.email" > Este email es incorrecto</p>
            <p class="text-danger" v-if="!$v.email.required" > Campo requerido</p>
            <!-- <p>{{$v.email}}</p>-->
            <br>
            <input type="password" placeholder="Password"  v-model="$v.password.$model" class="form-control my-3" :class="{'is-invalid': $v.password.$error}">
            <p class="text-danger" v-if="!$v.password.minLength">Minimo 6 caracteres</p>
            <input type="password" placeholder="Repeat Password"  v-model="$v.repeatPassword.$model" class="form-control my-3" :class="{'is-invalid': $v.repeatPassword.$error}">
            <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">No coincide</p>
            <b-button variant="primary" type="submit" :disabled="$v.$invalid"> Enviar</b-button>
        </form> 
    </div>
</template>

<script>

import { required, minLength, email, sameAs, between } from 'vuelidate/lib/validators'

export default {
    name:"Validacion",
    data() {
        return {
            email:'',
            password:'',
            repeatPassword:''
        }
    },
    validations: {
        email: {
            required, email
        },
        password: {
            required,
            minLength:minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    },
    methods : {
        submit(){
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                this.submitStatus = 'OK'
                }, 500)
            }
        }
    }
}
</script>