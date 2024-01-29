const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const valorRemedio = frm.preco.value;
    const Promo = Math.floor(valorRemedio) * 2;

    const nome = frm.nome.value
    saida.innerText = `Promoção de ${nome} \n Leve 2 por apenas ${Promo.toFixed(2)}`

    e.preventDefault()
})

