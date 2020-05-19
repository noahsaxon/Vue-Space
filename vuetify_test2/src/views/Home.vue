<template>
  <div>
    <v-layout :wrap="true">
      <v-flex x12 >
        <v-card>
          <v-date-picker v-model="fecha" full-width dark locale="es" :min="minimo" :max="maximo" @change="getDolar(fecha)">

          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            {{valor}} 
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"; 
import {mapMutations} from "vuex"
export default {
  name: 'Home',
  data(){
    return {
      fecha: new Date().toISOString().substr(0, 10),
      minimo: "1984",
      maximo: new Date().toISOString().substr(0, 10),
      valor: null
    }
  }, methods: {
    ...mapMutations(['mostrarLoading' , 'ocultarLoading']),
    async getDolar(dia){
      let arrayFecha = dia.split(['-'])
      dia = arrayFecha[2] + '-' + arrayFecha[1] + '-' +arrayFecha[0]
      try {
        this.mostrarLoading({titulo:"Accediendo a Informacion"})
        let datos = await axios.get(`https://mindicador.cl/api/dolar/${dia}`);
        if(datos.data.serie.length > 0 ){
          this.valor = await datos.data.serie[0].valor;        
        } else {
          this.valor = "Sin Resultados"
        }
        
      } catch (error) {
        console.log(error)
      } finally{
        this.ocultarLoading();
      }

    }
  },
  created(){
    this.getDolar(this.fecha)
  }
}
</script>
