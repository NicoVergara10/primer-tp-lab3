
app.component('parrafo-monto', {
    template:
    /*html*/
    `
    <p>El monto que recibirá es de $</p>`,
    props:{
        montoFinal: {
            type: String,
            required: true
            
        },
        invirtioPlata: {
            type: Boolean,
            required: true
        }
    }
})
let mountedApp = app.mount('#app')