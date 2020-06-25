<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>Bienvenido {{usuario.nombre}}</v-card-text>
                <v-divider></v-divider>
                <v-card-text style="height:60vh;overflow:auto" v-chat-scroll>
                    <div :class="mensaje.uid === usuario.uid ? 'text-right' : 'text-left' " v-for="(mensaje , index) in mensajes" :key="index">
                        <v-chip
                            pill
                           
                        >
                            <v-avatar left>
                            <v-img :src="mensaje.foto"></v-img>
                            </v-avatar>
                           {{mensaje.mensaje}}
                        </v-chip>
                        <p class="caption mr-1">{{mensaje.fecha}}</p>
                    </div>
                </v-card-text>
                <v-card-text>
                     <v-divider></v-divider>
                    <v-form @submit.prevent="enviarMensaje" v-model="valido">
                        <v-text-field v-model="mensaje" label="Escribe tu mensaje aqui." required :rules="reglas">

                        </v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import {db} from '@/firebase'
import moment from 'moment'
export default {
   
    computed: {
        ...mapState(['usuario'])
    },
    data(){
        return {
            mensaje:"",
            valido:false,
            reglas: [
                v => !!v || 'Tiene que escribir un mensaje'
            ],
            mensajes: []
        }
    },
    methods: {
        enviarMensaje(){
            if(this.valido){

                const chat = {mensaje:this.mensaje , nombre:this.usuario.nombre , foto: this.usuario.foto , fecha: Date.now(), uid:this.usuario.uid};
                console.log("Guardando mensaje:" , chat)
                db.collection('chats').add(chat).catch(error => console.log('Error al guardar mensaje'))
                this.mensaje = ''
            } else {
                console.log("El mensaje no es valido")
            }

        }
    },
    created(){
        let ref = db.collection('chats').orderBy('fecha', 'desc').limit(10)
        moment.locale('es')
        ref.onSnapshot(querySnapshot => {
            this.mensajes = []
            querySnapshot.forEach(doc => {
                const men = doc.data();
                men.fecha = moment(doc.data().fecha).format('lll')
                this.mensajes.unshift(men)
            })
        })
    }

}
</script>