<template>
  <div class="home">
  
    <Admin></Admin>
    <Galeria></Galeria>
  </div>

</template>

<script>
// @ is an alias to /src
import Admin from '@/views/Admin'
import Galeria from '@/views/Galeria'
import {mapState} from 'vuex'
export default {
  components: {
    Admin,
    Galeria
  },
  name: 'Home',
  computed: {
    ...mapState(['usuario'])
  },
}
</script>
