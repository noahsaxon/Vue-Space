<template>
  <div>
    <v-layout :wrap="true">
      <v-flex x12 >
        <v-card>
          <v-date-picker v-model="fecha" full-width dark locale="es">

          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            650 - {{fecha}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      fecha:''
    }
  }
}
</script>
