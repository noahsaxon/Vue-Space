<template>
    <v-layout justify-center>
        <v-flex xs6>
            <v-card class="text-center pt-5" >
                <v-card-text>
                    <v-avatar>
                        <img
                            :src="usuario.foto"
                            :alt="usuario.nombre"
                        >
                    </v-avatar> 
                </v-card-text>
                <v-card-text>
                    <h3>{{usuario.nombre}}</h3>
                </v-card-text>
                <v-card-text>
                    <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)">
                    <v-btn color="primary mr-2" @click="$refs.boton.click()">
                        Buscar Imagen
                    </v-btn>
                    <v-btn color="secondary" :disabled="file === null" @click="subirImagen()" :loading="loading">
                        Subir Imagen
                    </v-btn>                    
                </v-card-text>
                <v-card-text v-if="error">
                    <h4>{{error}}</h4>
                </v-card-text>
                <v-card-text v-if="file">
                    <h4>{{file.name}}</h4>
                    <v-img :src="tempUrl"> </v-img>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import {firebase , storage } from '@/firebase'
import {mapState, mapActions} from 'vuex'
export default {
    name:'Admin',
    computed: {
        ...mapState(['usuario', 'imagenes'])
    },
    data(){
        return {
            error:false,
            file:null,
            tempUrl: '',
            loading: false
        }
    },
    methods: {
        ...mapActions(['saveImages']),
        buscarImagen(event) {
            console.log("TYPE :: ", event.target.files[0]);
            const tipoArchivo = event.target.files[0].type;
            if(tipoArchivo ==='image/jpeg' || tipoArchivo ==='image/png') {
                this.file = event.target.files[0];                
            } else {
                this.error = 'Archivo no valido';
                this.file = null;
                return
            }


            const reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.tempUrl = e.target.result;
            }
        },
        async subirImagen() {
                try {
                this.loading = true;
                const storageRef = storage.ref().child(this.usuario.email).child(this.file.name);
                const res =  await storageRef.put(this.file)
                const urlDescarga = await storageRef.getDownloadURL();
                this.saveImages({name : this.file.name , url:urlDescarga , uid:this.usuario.uid})
                this.imagenes.push({name : this.file.name , url:urlDescarga , uid:this.usuario.uid})
                this.error = 'Imagen subida con exito'
                this.file = null
            } catch (error) {  
                console.log("error " , error)
            } finally {
                this.loading = false;
            }
        }
    },
}
</script>