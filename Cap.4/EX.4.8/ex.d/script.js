const prompt = require("prompt-sync")();

const LadoA = Number(prompt('Lado A: '))
const LadoB = Number(prompt('Lado B: '))
const LadoC = Number(prompt('Lado C: '))

let listaDosLados = [LadoA, LadoB, LadoC];
listaDosLados.sort();  //se não for passado parametro, ordena os numeros em ordem crescente

let Mvalor = listaDosLados[2];

if (Mvalor < (listaDosLados[0] + listaDosLados[1])){
    console.log('Os lados podem formar um triangulo')
} else {
    console.log('Os lados não podem formar um triangulo')
}

