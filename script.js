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
    
  if (usuario.value.trim() == "") {
      let etiquetaU = document.createElement('p');
      etiquetaU.appendChild(document.createTextNode("El campo no debe estar vacío, por favor ingrese su nombre y apellido"));
      document.getElementById("error1").appendChild(etiquetaU);
      setTimeout(() => {
        etiquetaU.remove();
    }, 3000);

    } if (monto.value < 1000) {
      let etiquetaM = document.createElement('p');
      etiquetaM.appendChild(document.createTextNode("El monto a ingresar debe ser igual o superior a $1000"));
      document.getElementById("error2").appendChild(etiquetaM);
      setTimeout(() => {
        etiquetaM.remove();
    }, 3000);

    } if (dias.value < 30) {
      let etiquetaD = document.createElement('p');
      etiquetaD.appendChild(document.createTextNode("La cantidad de días a ingresar debe ser igual o superior a 30"));
      document.getElementById("error3").appendChild(etiquetaD);
      setTimeout(() => {
        etiquetaD.remove();
    }, 3000);
    } else {
      calcularMonto(monto.value, dias.value);
    }
})

btnReinvertir.addEventListener('click', () =>{
  if (usuario.value.trim() == "") {
      let etiquetaU = document.createElement('p');
      etiquetaU.appendChild(document.createTextNode("El campo no debe estar vacío, por favor ingrese su nombre y apellido."));
      document.getElementById("error1").appendChild(etiquetaU);
      setTimeout(() => {
        etiquetaU.remove();
    }, 3000);
  } if (monto.value < 1000) {
      let etiquetaM = document.createElement('p');
      etiquetaM.appendChild(document.createTextNode("El monto a ingresar debe ser igual o superior a $1000"));
      document.getElementById("error2").appendChild(etiquetaM);
      setTimeout(() => {
        etiquetaM.remove();
    }, 3000);
    } if (dias.value < 30) {
      let etiquetaD = document.createElement('p');
      etiquetaD.appendChild(document.createTextNode("La cantidad de días a ingresar debe ser igual o superior a 30"));
      document.getElementById("error3").appendChild(etiquetaD);
      setTimeout(() => {
        etiquetaD.remove();
    }, 3000);
    } else {
      calcularReinversion(monto.value, dias.value)
    }
})

function calcularMonto(monto, dias){
    const montoFinal = parseFloat(monto) + monto * (dias / 360) * intereses(dias);
  
    let etiquetaP = document.createElement('p');
    etiquetaP.appendChild(document.createTextNode("El monto que debe recibir de acuerdo a su inversión es: " + "$" +  montoFinal.toFixed(2)));
    document.getElementById("calculoInversion").innerHTML = '';
    document.getElementById("calculoInversion").appendChild(etiquetaP);
}
function calcularReinversion(monto, dias){
    let periodo = [];
    document.getElementById("calculoReinvertir").innerHTML = '';

    let montoInicial = parseFloat(monto) + monto * (dias / 360) * intereses(dias);
    let montoFinal = montoInicial + montoInicial * (dias / 360) * intereses(dias);

    for (let i = 0; i < 4; i++) {
        periodo[i] = i + 1;
        
        if(periodo[i] == 1){
          montoInicial = parseFloat(monto);
          montoFinal = montoInicial + montoInicial * (dias / 360) * intereses(dias);
        }else if(periodo[i] == 2){
          montoInicial = montoFinal;
          montoFinal = montoInicial + montoInicial * (dias / 360) * intereses(dias);
        }else if(periodo[i] == 3){
          montoInicial = montoFinal;
          montoFinal = montoInicial + montoInicial * (dias / 360) * intereses(dias);
        }else{
          montoInicial = montoFinal;
          montoFinal = montoInicial + montoInicial * (dias / 360) * intereses(dias);
        }
        const row = document.createElement("table");
        row.innerHTML = `
          <div>
            <tr>
              <th>PERIODO</th>
              <br>
              <td>${periodo[i]}</td>
              <th>MONTO INICIAL</th>
              <td>${montoInicial.toFixed(2)}</td>
              <th>MONTO FINAL</th>
              <td>${montoFinal.toFixed(2)}</td>
            </tr>
          </div>
        `;
        document.getElementById("calculoReinvertir").appendChild(row);
        
    }
}
