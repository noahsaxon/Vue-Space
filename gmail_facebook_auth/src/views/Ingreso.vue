<template>
    <v-layout justify-center="true"> 
        <v-flex xs12 sm8 md6 xl4 mt4>
            <v-card>
                <v-card-text class="display-1 text-uppercase white--text text-xs-center" :class="registro ? 'success' : 'info'">
                    <span v-if="!registro">Ingreso</span>
                    <span v-if="registro">Registro</span>
                </v-card-text>

            </v-card>
                <v-card-text class="display-1 text-uppercase  white--text text-xs-center">
                    <v-btn block color="error"  @click="google"><v-icon left dark >fab fa-google</v-icon> Google</v-btn>
                    <v-btn block color="info"  @click="facebook" ><v-icon left dark > fab fa-facebook-f</v-icon>Facebook</v-btn>
                </v-card-text>
                <v-card-text  >
                    <v-btn block class="text-uppercase" v-if="!registro" @click="registro = !registro">No tiene cuenta? Registrate Aqui</v-btn>
                    <v-btn block class="text-uppercase" v-if="registro" @click="registro = !registro">Ya tiene cuenta? Ingresa Aqui</v-btn>
                </v-card-text>
        </v-flex>
        
    </v-layout>
</template>

<script>
import {mapMutations} from 'vuex'
import {firebase , auth, db} from "@/firebase"
import router from '@/router'
export default {
    name:'Ingreso',
    data(){
        return {
            registro: false
        }
    },
    methods: {
        ...mapMutations(['nuevoUsuario']),
        async google() {
            const provider = new firebase.auth.GoogleAuthProvider();
            await this.ingresar(provider)
        },
        async facebook() {
            var provider = new firebase.auth.FacebookAuthProvider();
            this.ingresar(provider)
        },
        async ingresar(provider) {
            firebase.auth().languageCode = 'es';            
            try {
                const result = await firebase.auth().signInWithPopup(provider)
                const user = result.user;

                //cosntruccion de usuario
                const userdata  = {
                    nombre : user.displayName,
                    email: user.email,
                    uid: user.uid,
                    foto: user.photoURL
                }
                this.nuevoUsuario(userdata);

                //guardar en firestore
                await db.collection('usuarios').doc(userdata.uid).set(userdata) 
                router.push({name:'Home'})
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>