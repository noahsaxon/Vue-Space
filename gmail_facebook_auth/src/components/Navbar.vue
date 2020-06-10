<template>
<div>
    <v-app-bar
      app
      color="black"
      dark
      
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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

      <v-btn v-if="usuario != null"
      @click="cerrarSession" >
        <span class="mr-2">Cerrar Session</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
        >

        <v-layout column align-center mt-5>
          <v-flex>
            <v-avatar>
              <img
                :src="usuario.foto"
                alt="John"
              >
            </v-avatar>            
          </v-flex>
          <v-flex>
            <p class="mt-3">{{usuario.nombre}}</p>
          </v-flex>
        </v-layout>
            <v-divider></v-divider>

            <v-list >

                <v-list-item
                v-for="(item, index) in items" 
                :key="index" :to="item.to"
                
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name:'Navbar',
    data(){
        return{
            drawer : false,
            items:[
                {title:'Dashboard' , icon:'fas fa-address-card', to: 'home'},
                {title:'Perfil' , icon:'fas fa-address-card', to: 'account'},
                {title:'Fotografias' , icon:'fas fa-address-card', to: 'fotos'}
            ]
        }
    },
    computed: {
        ...mapState(['usuario'])
    },
      methods: {
    ...mapActions(['cerrarSession'])
  }
}
</script>