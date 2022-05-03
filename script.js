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
    calcularMonto(monto.value, dias.value)
})
btnReinvertir.addEventListener('click', () =>{
    calcularMonto(monto.value, dias.value)
})

function calcularMonto(monto, dias){
   
    const montoFinal = parseFloat(monto) + monto * (dias / 360) * intereses(dias);
  
    let etiquetaP = document.createElement('p');
    etiquetaP.appendChild(document.createTextNode("El monto que debe recibir de acuerdo a su inversión es: " + "$" +  montoFinal.toFixed(2)));

    document.getElementById("calculoInversion").appendChild(etiquetaP);
}

