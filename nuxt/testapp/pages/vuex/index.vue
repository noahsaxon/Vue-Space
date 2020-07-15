<template>
    <div>
        Vuex
    </div>
</template>

<script>

import { db } from '@/plugins/firebase.js'
export default {
    created(){
        db.collection('tareas').get().then( query =>  {
            query.array.forEach( element => {
                console.log(element.data());
            })
        })

    }
}
</script>