<template>
  <div id="app" class="container mt-5">

    <div>
        <b-nav tabs fill>
          <b-nav-item :to="{name:'registro'}" v-if="!existeUsuario"  >Registro</b-nav-item>
          <b-nav-item :to="{name:'inicio'}" v-if="existeUsuario">Inicio</b-nav-item>
          <b-nav-item :to="{name:'ingreso'}"  v-if="!existeUsuario">Ingreso</b-nav-item>
          <b-nav-item @click="cerrarSession"  v-if="existeUsuario">Cerrar Session</b-nav-item>
        </b-nav>
      </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions , mapGetters } from 'vuex'
export default {
  name:'App',
  methods:{
    ...mapActions(['cerrarSession'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  },
}
</script>
<style>

</style>
