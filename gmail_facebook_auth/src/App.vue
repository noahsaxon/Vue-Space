<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

      <span class="headline">Vue</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
      @click="cerrarSession" >
        <span class="mr-2">Cerrar Session</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['cerrarSession'])
  },
};
</script>
