<template>
    <div>
        <h1>Formulario</h1>
        <form action="">
                <b-row>
                    <b-col md="3"  >
                        <b-form-input type="number" v-model="numero"></b-form-input>
                        <b-form-input type="text" v-model="texto" :state="comprobarLogitud"></b-form-input>
                        <small>Minimo 3 caracteres</small>
                        <p>texto: {{texto}}</p>
                    </b-col>
                    <b-col md="3"> 
                        <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="Individual radios">
                            <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
                            <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
                            </b-form-group>
                    </b-col>
                    <b-cool md="3">
                        <b-form-checkbox-group
                            id="checkbox-group-1"
                            v-model="selected2"
                            :options="options"
                            name="flavour-1"
                        ></b-form-checkbox-group>
                        <div>Selected: <strong>{{ selected2 }}</strong></div>
                    </b-cool>
                </b-row>

        </form>

    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return {
            texto:'',
            numero:'',
            selected2:[],
            selected:[],
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            check:[]
        }
    },
    computed: {
        comprobarLogitud(){
            return this.texto.length < 2  ? false : true ;
        }
    },
}
</script>