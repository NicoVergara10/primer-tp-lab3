let app = Vue.createApp({
  data(){
    return{
      titulo: "SIMULADOR DE PLAZO FIJO",
      nombreApellido: "",
      montoInvertido: "",
      cantidadDias: "",
    }
  },
  methods: {
    intereses(cantidadDias){
      let porcentaje = 0;

      if(cantidadDias >= 30 && cantidadDias <= 60){
          porcentaje = (40 / 100);
      }
      else if (cantidadDias > 60 && cantidadDias <= 120){
          porcentaje = (45 / 100);
      }
      else if(cantidadDias > 121 && cantidadDias < 360){
          porcentaje = (50 / 100);
      }
      else{
          porcentaje = (60 / 100);
      }
      return porcentaje;
    },
    calculo(montoInvertido, cantidadDias){
      calculoFinal = parseFloat(montoInvertido) + montoInvertido * (cantidadDias / 360) * this.intereses(cantidadDias);
    },
    reinvertir(montoInvertido, cantidadDias){
      let periodo = [];

      for (let i = 0; i < 4; i++) {
        periodo[i] = i + 1;
        
        if(periodo[i] == 1){
          montoInicial = parseFloat(montoInvertido);
          montoFinal = calculo(montoInvertido, cantidadDias);
        }else if(periodo[i] == 2){
          montoInicial = montoFinal;
          montoFinal = calculo(montoInicial, cantidadDias);
        }else if(periodo[i] == 3){
          montoInicial = montoFinal;
          montoFinal = calculo(montoInicial, cantidadDias);
        }else{
          montoInicial = montoFinal;
          montoFinal = calculo(montoInicial, cantidadDias);
        }
      }
    },
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
