const prompt = require("prompt-sync")()
const PesoRacao = Number(prompt("Peso total da ração (Kg): "));
const Consumo = Number(prompt("Quanto seu gato consome por dia (Gr): "));

const DiasDeDuracao = Math.floor((PesoRacao * 1000)/Consumo);
const Sobra = (PesoRacao * 1000) - (DiasDeDuracao * Consumo);

console.log(`Duração: ${DiasDeDuracao} dias`)
console.log(`Sobra: ${Sobra}gr`)



