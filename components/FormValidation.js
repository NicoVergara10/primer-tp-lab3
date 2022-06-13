app.component('form-validation',{
    template:
    /*html*/
    `<form id="app">
        <h1 class="titulo">{{titulo}}</h1>
        <div class="contenedor">
            <label>Nombre y Apellido </label>
            <input type="text" v-model="inversor.nombre" id="nombreApellido" placeholder="Ingrese su nombre y apellido"/>
            <div id="error1">
                <p v-if="inversor.nombre === ''">{{errormsg[0]}}</p>
            </div>
        </div>
        <div class="contenedor">
            <label>Monto a Invertir: </label>
            <input type="number" v-model.number="inversor.monto" id="montoInvertido" placeholder= 1000 />
            <div id="error2">
                <p v-if="inversor.monto < 1000">{{errormsg[1]}}</p>
            </div>
        </div>
        <div class="contenedor">
            <label>Cantidad de Días: </label>
            <input type="number" v-model.number="inversor.dias" id="cantidadDias" placeholder= 30 />
            <div id="error3">
                <p v-if="inversor.dias < 30">{{errormsg[2]}}</p>
            </div>
        </div>
        <button type="button" id="btnCalcular" @click="Calcular">CALCULAR</button>
        <button type="button" id="btnReinvertir" @click="Reinvertir">REINVERTIR</button>
        <div class="calculoInversion" id="calculoInversion">
          <p v-if="invirtioPlata">El monto que recibirá es de ${{montoFinal}}</p>
          <parrafo-monto v-if="invirtioPlata"></parrafo-monto>
        </div>
        <div class="cuadroReinventir" id="calculoReinvertir"></div>
    </form>`,

    data() {
        return{
            inversor:{
                nombre:'',
                monto: '',
                dias: '',
            },
            errormsg: ["El campo no debe estar vacío, por favor ingrese su nombre y apellido.", "El monto a ingresar debe ser igual o superior a $1000.","La cantidad de días a ingresar debe ser igual o superior a 30."],
        }
    },
    methods: {
        intereses(dias){
            let porcentaje = 0;
            if(dias >= 30 && this.dias <= 60){
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
        Calcular(monto, dias){
            montoFinal = monto + monto * (dias / 360) * this.intereses(dias);
            return montoFinal;
        },
        Reinvertir(monto, dias){
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
})