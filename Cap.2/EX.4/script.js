const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const preco = frm.preco.value;
    const tempoDeUso = frm.tempo.value;

    const ValorTotal = Math.ceil((tempoDeUso/15)) * preco;

    saida.innerText = `Valor a pagar R$: ${ValorTotal.toFixed(2)}`
    e.preventDefault();
})