<template>
  <v-app>

    <Navbar v-if="usuario !== '' && usuario !== {}"></Navbar>
    <v-content>
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ( {
    //
  }),
  computed: {
    ...mapState(['usuario'])
  },
};

</script>
