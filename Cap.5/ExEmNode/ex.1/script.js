const prompt = require("prompt-sync")();

let ano; 

do {
    ano = Number(prompt('Digite: '))
    if (ano == 0){
        break
    } else if (ano < 1930) {
        console.log(`${ano} não é um ano de copa.`)
    } else if((ano - 1930) % 4 == 0){
        console.log(`${ano} é um ano de copa`)
    } else {
        console.log(`${ano} não é um ano de copa`)
    }
} while(ano != 0)
