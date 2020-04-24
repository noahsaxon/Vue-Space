<template>
    <div>
        <ul class="list-group">
            <li  v-for="(item , index) of arrayOrdenado" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center" >
                {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name:'Lista',
    computed:{
        ...mapState(['frutas']),
        arrayOrdenado(){
            return this.frutas.slice(0).sort( (a, b) => b.cantidad - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar'])
    }
}
</script>

<style scoped>
    
</style>