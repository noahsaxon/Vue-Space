<template>
    <div class="container mt-5">
            <div class="row">
                <div class="col-md-12" v-for="(item,index ) in articulos" :key="index">
                    <div class="card mt-5">
                        <div class="card-header">
                        <nuxt-link :to="`blog/${item.id}`">
                            <h1>{{item.title}}</h1>
                        </nuxt-link>
                        </div>
                        <div class="card-body">
                            <p>{{item.body}}</p>
                        </div>

                    </div>

                </div>
            </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    head: {
        title:"List from jsonplaceholder",

    },
    data(){
        return {
            articulos : [
            ]
        }

    },
    async created(){
        try {
            const resp = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
            this.articulos = resp.data;
            console.log(this.articulos)
        } catch (error) {
            console.log(error);
            
        }


    }
}
</script>