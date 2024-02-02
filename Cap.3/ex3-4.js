const prompt = require("prompt-sync")()  //adiciona o pacode node para possibilitar a entrada de dados
const salario = Number(prompt("Digite seu salário: "))
const anosNaEmpresa = Number(prompt("Digite o tempo, em anos, que trabalha na empresa: "))

const quadrienio = Math.floor(anosNaEmpresa/4)
const salarioFinal = salario + (quadrienio * (salario * 0.01))

console.log(`Você tem direito a ${quadrienio} quadrieno(s). Logo, seu salário final será R$: ${salarioFinal.toFixed(2)} `)


//o funcionário recebe um acréscimo de 1% no salário a cada 4 anos (quadrieno) que trabalha na empresa

//para executar o programa abra o terminal e digite 'node ex3-4 (que é o nome do arquivo)'




