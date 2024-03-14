const prompt = require("prompt-sync")();

let N_Coelhos = Number(prompt("Numero de coelhos: "))
const anos = Number(prompt("Anos: "))

for (let i = 1; i <= anos; i++){
    if(anos == 1){
        console.log(`${i} Ano: ${N_Coelhos} coelhos`)
        break
    } else {
        console.log(`${i} Ano: ${N_Coelhos} coelhos`)
        N_Coelhos = N_Coelhos * 3;
    }
}

