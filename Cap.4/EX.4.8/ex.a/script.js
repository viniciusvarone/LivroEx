const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número: "))


let IouP;
if (numero % 2 == 0){
    IouP = "par" 
} else {
    IouP = "ímpar"
}

console.log(`O número é ${IouP}`)


//abaixo um exemplo usando o operador ternário como alternativa ao 'if..else'

/*
const IP = numero%2 == 0 ? "par" : "impar"
console.log(`Numero ${IP}`)
*/

