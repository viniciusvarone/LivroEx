const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const saque = frm.entradaSaque.value;

    let notasCem;
    let notasCinq;
    let notasDez;

    if (saque >= 100){
        notasCem = Math.floor(saque/100)
        notasCinq = Math.floor((saque % 100)/ 50)
        notasDez = Math.floor(((saque % 100)% 50)/10)
    } else if (saque < 100 && saque >= 50){
        notasCem = 0
        notasCinq = Math.floor(saque/50)
        notasDez = Math.floor((saque % 50)/ 10)
    } else if (saque < 50 && saque >= 10){
        notasCem = 0
        notasCinq = 0
        notasDez = Math.floor(saque/10)
    } else {
        saida.innerText = `O valor minímo para o saque é 10R$` 
    } 

    saida.innerText = `Notas de R$100: ${notasCem} \n Notas de R$50: ${notasCinq} \n Notas de R$10: ${notasDez}`;

    e.preventDefault()
})