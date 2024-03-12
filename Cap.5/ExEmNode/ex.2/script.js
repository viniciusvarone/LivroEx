const prompt = require("prompt-sync")();

const nome_Produto = prompt('Nome do produto: ')
const N_Etiquetas = Number(prompt('Número de etiquetas: '))

for(let i = 1; i <= N_Etiquetas; i++){
    console.log(nome_Produto)
}

