const prompt = require("prompt-sync")();

const nPessoas = prompt("Número de pessoas: ")
const nPeixes = prompt("Número de peixes pescados: ")

const precoPorEnt = nPessoas * 20;
let peixeExtra = 0;
if (nPeixes > nPessoas){
    peixeExtra = (nPeixes - nPessoas) * 12;
}

const valorTotal = precoPorEnt + peixeExtra;

console.log(`O valor total a ser pago é R$: ${valorTotal.toFixed(2)}`);

