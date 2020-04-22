Vue.component('hijo', {
    template: 
    `
    <div class="p-5 bg-success text-white">
        <h2>Componente Hijo:{{numero}}</h2>
        <button class="btn btn-danger" @click="numero++"> +  </button>
        </div>
    `,
    props:['numero']
    ,
    data(){
        return  {
            nombre: 'alvaro'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
})