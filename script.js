const monto = document.getElementById('montoInvertido');
const dias = document.getElementById('cantidadDias');
const usuario = document.getElementById('nombreApellido');
const btnCalcular = document.getElementById('btnCalcular');
const btnReinvertir = document.getElementById('btnReinvertir');

function intereses(dias){
    let porcentaje = 0;

    if(dias >= 30 &&  dias <= 60){
        porcentaje = (40 / 100);
    }
    else if (dias > 60 &&  dias <= 120){
        porcentaje = (45 / 100);
    }
    else if(dias > 121 &&  dias < 360){
        porcentaje = (50 / 100);
    }
    else{
        porcentaje = (60 / 100);
    }
    return porcentaje;
}

btnCalcular.addEventListener('click', () =>{
    
    if (usuario.value == "") {
        alert("Debe completar el campo de nombre completo.");
      } else if (monto.value < 1000) {
        alert("El monto debe ser mayor o igual a $1000.");
      } else if (dias.value < 30) {
        alert("Los días deben ser mayor o iguales a 30.");
      } else {
        calcularMonto(monto.value, dias.value);
      }
})

btnReinvertir.addEventListener('click', () =>{
    calcularReinversion(monto.value, dias.value)
})


function calcularMonto(monto, dias, usuario){
    const montoFinal = parseFloat(monto) + monto * (dias / 360) * intereses(dias);
  
    let etiquetaP = document.createElement('p');
    etiquetaP.appendChild(document.createTextNode("El monto que debe recibir de acuerdo a su inversión es: " + "$" +  montoFinal.toFixed(2)));

    document.getElementById("calculoInversion").appendChild(etiquetaP);
}
function calcularReinversion(monto, dias){
    let periodo = [];

    for (let i = 0; i < 4; i++) {
        periodo[i] = i + 1;
        let montoInicial = parseFloat(monto) + monto * (dias / 360) * intereses(dias);
        let montoFinal = montoInicial + montoInicial * (dias / 360) * intereses(dias);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${periodo[i]}</td>
            <td>${montoInicial.toFixed(2)}</td>
            <td>${montoFinal.toFixed(2)}</td>
        `;
        document.getElementById("calculoReinvertir").appendChild(row);
    }
}
