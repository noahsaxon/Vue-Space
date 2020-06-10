<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import {mapActions} from 'vuex'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>
