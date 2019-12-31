const app = new Vue({
    el:'#app',
    data:{
        fondo: 'bg-warning',
        color:true,
        contador:0,
        barra_color : 'bg-success'
    },
    methods:{

    },
    computed: {
        color_barra () {
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20,
            }
        }
    }

})