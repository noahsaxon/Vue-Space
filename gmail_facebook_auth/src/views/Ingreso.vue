<template>
<v-parallax
    
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout justify-center="true" align="center" style="padding-top:140px"
      > 
        <v-flex xs12 sm8 md6 xl4 pt5 >
            <v-card >
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
 </v-parallax>    
</template>

<script>
import {mapMutations , mmapActions, mapActions} from 'vuex'
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
        ...mapActions(['setUsuario']),
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
                await this.setUsuario(userdata);

                //guardar en firestore
                router.push({name:'Home'})
            } catch (error) {
                console.log("error", error)
            }
        }
    },
}
</script>