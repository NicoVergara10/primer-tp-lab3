window.onload = accion;

function accion(){
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){
    let montoInvertido = document.getElementById("montoInvertido");
    let monto = montoInvertido.value;
    

    let cantidadDias = document.getElementById("cantidadDias");
    let dias = cantidadDias.value;
    
    let porcentaje = 0;
    if(cantidadDias.value >= 30 &&  cantidadDias.value <= 60){
        porcentaje = 40;
    }
    else if (cantidadDias.value > 60 &&  cantidadDias.value <= 120){
        porcentaje = 45;
    }
    else if(cantidadDias.value > 121 &&  cantidadDias.value < 360){
        porcentaje = 50;
    }
    else{
        porcentaje = 60;
    }
    const montoFinal = parseInt(monto) + monto * (dias / 360) * (porcentaje / 100);
    alert(montoFinal)
}