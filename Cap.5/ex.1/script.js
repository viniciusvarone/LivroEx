const prompt = require("prompt-sync")(); 

const N = Number(prompt('Digite um número: '))

let conta;
for (let i = 1; i <= 10; i++){
    conta = N * i
    console.log(`${N} x ${i} = ${conta}`)
}
