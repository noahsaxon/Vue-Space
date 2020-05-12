<template>
    <div>
        <h3>Ruta protegida</h3>
        Bienvenido {{usuario.email}}!
    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'Inicio',
    computed: {
        ...mapState(['usuario'])
    },
}
</script>