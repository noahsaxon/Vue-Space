const app = new Vue({
    el:'#app',
    data:{
        titulo:'Hola mundo con vue',
        arr:['item1' , 'item2', 'item3'],
        objetos:[
            {nombre:"MEMA", estado:"disponible"},
            {nombre:"MEME", estado:"ocupado"},            
            {nombre:"MEMI", estado:"disponible"},
        ]
    }
})