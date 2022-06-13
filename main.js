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
    calculo(){
        this.montoFinal = this.monto + this.monto * (this.dias / 360) * this.intereses(this.dias);
        return this.montoFinal;
      },
      intereses(){
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
      this.invirtioPlata = true;
      this.calculo(this.monto);          
    },
    Reinvertir(){
      if(this.invirtioPlata) this.calcularReinversion(this.monto, this.dias)
    },
    calcularReinversion(){
      let periodo = [];
      document.getElementById("calculoReinvertir").innerHTML = '';

      for (let i = 0; i < 4; i++) {
          periodo[i] = i + 1;
          
          if(periodo[i] == 1){
            montoInicial = parseFloat(this.monto);
            montoFinal = this.calculo(this.montoInicial, this.dias);
          }else if(periodo[i] == 2){
            montoInicial = montoFinal;
            montoFinal = this.calculo(this.montoInicial, this.dias);
          }else if(periodo[i] == 3){
            montoInicial = montoFinal;
            montoFinal = this.calculo(this.montoInicial, this.dias);
          }else{
            montoInicial = montoFinal;
            montoFinal = this.calculo(this.montoInicial, this.dias);
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
