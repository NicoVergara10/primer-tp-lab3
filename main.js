
let app = Vue.createApp({
  data(){
    return{
      nombre: "",
      monto: "",
      dias: "",
      errormsg: ["El campo no debe estar vacío, por favor ingrese su nombre y apellido.", "El monto a ingresar debe ser igual o superior a $1000.","La cantidad de días a ingresar debe ser igual o superior a 30."],
      emptyName: false,
      montoBug: false,
      diasBug: false,
      titulo: "SIMULADOR DE PLAZO FIJO",
      montoFinal: 0,
      invirtioPlata: false,
    }
  },
  methods: {
    calculo(monto){
        this.montoFinal = this.monto + this.monto * (this.dias / 360) * this.intereses(this.dias);
        return this.montoFinal;
      
      },
      intereses(dias){
        let porcentaje = 0;
        if(this.dias >= 30 && this.dias <= 60){
            porcentaje = (40 / 100);
        }
        else if (this.dias > 60 && this.dias <= 120){
            porcentaje = (45 / 100);
        }
        else if(this.dias > 121 && this.dias < 360){
            porcentaje = (50 / 100);
        }
        else{
            porcentaje = (60 / 100);
        }
        return porcentaje;
        
      },
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
          this.invirtioPlata = true;
          this.calculo(this.monto);
        }
          
    },
    Reinvertir(){
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

      if(this.invirtioPlata) this.calcularReinversion(this.monto, this.dias)
      
    }
    },
    calcularReinversion(monto, dias){
      let periodo = [];
    document.getElementById("calculoReinvertir").innerHTML = '';

    let montoInicial = parseFloat(this.monto) + this.monto * (this.dias / 360) * this.intereses(this.dias);
    let montoFinal = montoInicial + montoInicial * (this.dias / 360) * this.intereses(this.dias);

    for (let i = 0; i < 4; i++) {
        periodo[i] = i + 1;
        
        if(periodo[i] == 1){
          montoInicial = parseFloat(this.monto);
          montoFinal = montoInicial + montoInicial * (this.dias / 360) * this.intereses(this.dias);
        }else if(periodo[i] == 2){
          montoInicial = montoFinal;
          montoFinal = montoInicial + montoInicial * (this.dias / 360) * this.intereses(this.dias);
        }else if(periodo[i] == 3){
          montoInicial = montoFinal;
          montoFinal = montoInicial + montoInicial * (this.dias / 360) * this.intereses(this.dias);
        }else{
          montoInicial = montoFinal;
          montoFinal = montoInicial + montoInicial * (this.dias / 360) * this.intereses(this.dias);
        }
        debugger;
        const row = document.createElement('table');
        row.innerHTML = `
          <div style= "border-color: black; border-width: solid; text-align: center; justify-content: center; align-items: center;">
            <tr style="text-align: center; justify-content: center; align-items: center;">
              <th>PERIODO:</th>
              <br>
              <td>${periodo[i]}</td>
              <th>MONTO INICIAL:</th>
              <td>${montoInicial.toFixed(2)}</td>
              <th>MONTO FINAL:</th>
              <td>${montoFinal.toFixed(2)}</td>
            </tr>
          </div>
                  
        `;
        document.getElementById("calculoReinvertir").appendChild(row);
        
    }
    }
    
     
  }
  

});app.mount('#app');



// const monto = document.getElementById('montoInvertido');
// const dias = document.getElementById('cantidadDias');
// const usuario = document.getElementById('nombreApellido');
// const btnCalcular = document.getElementById('btnCalcular');
// const btnReinvertir = document.getElementById('btnReinvertir');

// function intereses(dias){
//     let porcentaje = 0;

//     if(dias >= 30 &&  dias <= 60){
//         porcentaje = (40 / 100);
//     }
//     else if (dias > 60 &&  dias <= 120){
//         porcentaje = (45 / 100);
//     }
//     else if(dias > 121 &&  dias < 360){
//         porcentaje = (50 / 100);
//     }
//     else{
//         porcentaje = (60 / 100);
//     }
//     return porcentaje;
// }

// btnCalcular.addEventListener('click', () =>{
    
//   if (usuario.value.trim() === "") {
//     let etiquetaU = document.createElement('p');
//     etiquetaU.appendChild(document.createTextNode("El campo no debe estar vacío, por favor ingrese su nombre y apellido"));
//     document.getElementById("error1").appendChild(etiquetaU);
//     setTimeout(() => {
//       etiquetaU.remove();
//   }, 3000);
//   }
//   if (monto.value < 1000) {
//     let etiquetaM = document.createElement('p');
//     etiquetaM.appendChild(document.createTextNode("El monto a ingresar debe ser igual o superior a $1000"));
//     document.getElementById("error2").appendChild(etiquetaM);
//     setTimeout(() => {
//       etiquetaM.remove();
//   }, 3000);
//   } 
//   if (dias.value < 30) {
//     let etiquetaD = document.createElement('p');
//     etiquetaD.appendChild(document.createTextNode("La cantidad de días a ingresar debe ser igual o superior a 30"));
//     document.getElementById("error3").appendChild(etiquetaD);
//     setTimeout(() => {
//       etiquetaD.remove();
//   }, 3000);
//   }
//   else {
//     calcularMonto(monto.value, dias.value);
//   }
// })

// btnReinvertir.addEventListener('click', () =>{
//   if (usuario.value.trim() === "") {
//     let etiquetaU = document.createElement('p');
//     etiquetaU.appendChild(document.createTextNode("El campo no debe estar vacío, por favor ingrese su nombre y apellido."));
//     document.getElementById("error1").appendChild(etiquetaU);
//     setTimeout(() => {
//       etiquetaU.remove();
//   }, 3000);
//   } 
//   if (monto.value < 1000) {
//     let etiquetaM = document.createElement('p');
//     etiquetaM.appendChild(document.createTextNode("El monto a ingresar debe ser igual o superior a $1000"));
//     document.getElementById("error2").appendChild(etiquetaM);
//     setTimeout(() => {
//       etiquetaM.remove();
//   }, 3000);
//   } 
//   if (dias.value < 30) {
//     let etiquetaD = document.createElement('p');
//     etiquetaD.appendChild(document.createTextNode("La cantidad de días a ingresar debe ser igual o superior a 30"));
//     document.getElementById("error3").appendChild(etiquetaD);
//     setTimeout(() => {
//       etiquetaD.remove();
//   }, 3000);
//   }
//   else {
//     calcularReinversion(monto.value, dias.value)
//   }
// })

// function Calculo(monto, dias){
//   const montoFinal = parseFloat(monto) + monto * (dias / 360) * intereses(dias);
//   return montoFinal;
// }

// function calcularMonto(monto, dias){
//   if(monto < 1000){
//     let etiquetaP = document.createElement('p');
//     etiquetaP.appendChild(document.createTextNode("Debe ingresar un monto superior a $1000"));
//     document.getElementById("calculoInversion").innerHTML = '';
//     document.getElementById("calculoInversion").appendChild(etiquetaP);
//   }else{
//     let etiquetaP = document.createElement('p');
//     etiquetaP.appendChild(document.createTextNode("El monto que debe recibir de acuerdo a su inversión es: " + "$" +  Calculo(monto,dias).toFixed(2)));
//     document.getElementById("calculoInversion").innerHTML = '';
//     document.getElementById("calculoInversion").appendChild(etiquetaP);
//   }
// }
// function calcularReinversion(monto, dias){
  
//   let periodo = [];
//   document.getElementById("calculoReinvertir").innerHTML = '';
//   let etiqueta = document.createElement('p');
//   etiqueta.appendChild(document.createTextNode("REINVERSION DE CAPITAL"));
//   document.getElementById("calculoReinvertir").innerHTML = '';
//   document.getElementById("calculoReinvertir").appendChild(etiqueta);
    
//   if(monto < 1000)
//   {
//     let etiquetaP = document.createElement('p');
//     etiquetaP.appendChild(document.createTextNode("Debe ingresar un monto superior a $1000"));
//     document.getElementById("calculoReinvertir").innerHTML = '';
//     document.getElementById("calculoReinvertir").appendChild(etiquetaP); 
//   }else{
//     for (let i = 0; i < 4; i++) {
//         periodo[i] = i + 1;
        
//         if(periodo[i] == 1){
//           montoInicial = parseFloat(monto);
//           montoFinal = Calculo(monto, dias);
//         }else if(periodo[i] == 2){
//           montoInicial = montoFinal;
//           montoFinal = Calculo(montoInicial, dias);
//         }else if(periodo[i] == 3){
//           montoInicial = montoFinal;
//           montoFinal = Calculo(montoInicial, dias);
//         }else{
//           montoInicial = montoFinal;
//           montoFinal = Calculo(montoInicial, dias);
//         }
//         const row = document.createElement("table");
//         row.innerHTML = `
//           <div>
//             <br>
//             <tr>
//               <th>PERIODO</th>
//               <td>${periodo[i]}</td>
//               <th>MONTO INICIAL</th>
//               <td>${montoInicial.toFixed(2)}</td>
//               <th>MONTO FINAL</th>
//               <td>${montoFinal.toFixed(2)}</td>
//             </tr>
//           </div>
//         `;
//         document.getElementById("calculoReinvertir").appendChild(row);
//     }
//   }

// }
