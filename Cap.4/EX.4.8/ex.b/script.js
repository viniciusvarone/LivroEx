const prompt = require("prompt-sync")();

const vPermitida = Number(prompt("Velocidade permitida na estrada: "))
const vDoMotorista = Number(prompt("Velocidade do motorista na estrada: "))

const vPermitidaMaisPorcent = (vPermitida * (20/100)) + vPermitida;

let status;
if(vDoMotorista <= vPermitida){
    status = "sem multa"
} else if (vDoMotorista <= vPermitidaMaisPorcent && vDoMotorista >= vPermitida){
    status = "multa leve"
} else {
    status = "multa grave"
}

console.log(`${status}`);

