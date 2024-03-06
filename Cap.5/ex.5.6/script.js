const prompt = require("prompt-sync")(); 

const num = Number(prompt('Digite um número: '))
let contadorDivisores = 0;

for(let i = 1; i <= num; i++){
    if (num % i == 0){
        contadorDivisores++
    }
}

if (contadorDivisores == 2){
    console.log(`${num} é um número primo`) 
} else {
    console.log(`${num} não é um número primo`)
}

