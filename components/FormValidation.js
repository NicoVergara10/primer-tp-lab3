app.component('form-validation',{
    template:
    /*html*/
    `<form id="app">
    <h1 class="titulo">{{titulo}}</h1>
    <div class="contenedor">
        <label>Nombre y Apellido </label>
        <input type="text" v-model="inversor.nombre" id="nombreApellido" placeholder="Ingrese su nombre y apellido"/>
        <div id="error1">
            <p v-if="emptyName">{{errormsg[0]}}</p>
        </div>
    </div>
    <div class="contenedor">
        <label>Monto a Invertir: </label>
        <input type="number" v-model.number="inversor.monto" id="montoInvertido" placeholder= 1000 />
        <div id="error2">
            <p v-if="montoBug">{{errormsg[1]}}</p>
        </div>
    </div>
    <div class="contenedor">
        <label>Cantidad de Días: </label>
        <input type="number" v-model.number="inversor.dias" id="cantidadDias" placeholder= 30 />
        <div id="error3">
            <p v-if="diasBug">{{errormsg[2]}}</p>
        </div>
    </div>
    
</form>`,

    data() {
        return{
            inversor:{
                nombre:'',
                monto: '',
                dias: '',
            },
            errormsg: ["El campo no debe estar vacío, por favor ingrese su nombre y apellido.", "El monto a ingresar debe ser igual o superior a $1000.","La cantidad de días a ingresar debe ser igual o superior a 30."],
            emptyName: false,
            montoBug: false,
            diasBug: false,

        }
    },
    methods: {
        Calcular(){
            if(this.nombre.trim() === ""){
                this.emptyName = true;
                setTimeout(() => {
                  document.getElementById('error1').remove();
                }, 3000);
            }
      
            if(this.monto < 1000){
              this.montoBug = true;
              setTimeout(() => {
                document.getElementById('error2').remove();
              }, 3000);
            }
      
            if(this.dias < 30){
               this.diasBug = true;
               setTimeout(() => {
                document.getElementById('error3').remove();
               }, 3000);
            }
            else{
              calculo(montoInvertido, cantidadDias);
            }
        },
        Reinvertir(){

        }
    }


})