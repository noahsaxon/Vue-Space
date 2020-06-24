<template>
    <v-container>
        <v-overlay :value="carga">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

       <div v-if="JSON.stringify(usuario) !== '{}' ">
           <v-row>
               <v-col cols="12" md="4" v-for="imagen in imagenes" :key="imagen.name" >
        <v-card class="d-inline-block mx-auto" :dark=true>
            <v-container>
            <v-row s>
                <v-col cols="auto">
                <v-img
                    height="200"
                    width="200"
                    :src="imagen.url"
                ></v-img>
                </v-col>

                <v-col
                cols="auto"
                class="text-center pl-0"
                >
                <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                >
                    <v-col class="px-0">
                    <v-btn icon>
                        <v-icon>fas fa-heart</v-icon>
                    </v-btn>
                    </v-col>

                    <v-col class="px-0">
                    <v-btn icon>
                        <v-icon>fas fa-bookmark</v-icon>
                    </v-btn>
                    </v-col>

                    <v-col class="px-0">
                    <v-btn icon @click="showDialog(imagen.url)">
                        <v-icon>fas fa-share-alt</v-icon>
                    </v-btn>
                    </v-col>
                </v-row>
                </v-col>
            </v-row>
            </v-container>
        </v-card>

               </v-col>
           </v-row>

       </div>
 <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">URL LINK</v-card-title>

        <v-card-text>
            <v-text-field id="testing" label="Another input" :value="urlText"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            close
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="copyToClipboard()"
          >
            Copy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    </v-container>

</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Galeria',
    data(){
        return {
            dialog:false,
            urlText:''
        }
    },
    computed: {
        ...mapState(['usuario' , 'imagenes', 'carga'])
    },
    created(){
        this.loader(true)
        setTimeout(() => {

        this.loadImages(); 
        }, 3000);
        //console.log(this.usuario.uid)
       // this.loadImages()
    },
    methods: {
        ...mapActions(['getImages','loader']),
        async loadImages(){
            await this.getImages(this.usuario.uid)
            this.loader(false)
        },
        showDialog(url) {
            this.urlText = url;
            this.dialog = !this.dialog;
        },
        copyToClipboard(){
           let testingCodeToCopy = document.querySelector('#testing')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            this.dialog = !this.dialog;
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        }
    },
}
</script>