<template>
    <div>
        <h1>Formulario</h1>
        <form action="">
                <b-form-input type="number" v-model="numero"></b-form-input>
                <b-form-input type="text" v-model="texto" :state="comprobarLogitud"></b-form-input>
                <small>Minimo 3 caracteres</small>
        </form>
        <p>texto: {{texto}}</p>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return {
            texto:'',
            numero:''
        }
    },
    computed: {
        comprobarLogitud(){
            return this.texto.length < 2  ? false : true ;
        }
    },
}
</script>