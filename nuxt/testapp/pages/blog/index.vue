<template>
    <div class="container mt-5">
            <div class="row">
                <div class="col-md-3" v-for="(item,index ) in articulos" :key="index">
                    <h2><nuxt-link :to="`/blog/${item.id}`">{{item.titulo}}</nuxt-link></h2>

                </div>
            </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            articulos : [
                {id:1 , titulo:"titulo 1"},
                {id:2 , titulo:"titulo 2"},
                {id:3 , titulo:"titulo 3"}
            ]
        }
    }
}
</script>