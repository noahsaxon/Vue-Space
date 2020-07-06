<template>
    <div class = "container mt-5 ">
        <div class="card">
            <div class="card-body">
                <h1>{{articulo.title}}</h1>
                <p>{{articulo.body}}</p>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            articulo:''
        }
    } , 
    async created () {
        const respuesta = await axios.get(`http://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        this.articulo = respuesta.data;
    }

}
</script>