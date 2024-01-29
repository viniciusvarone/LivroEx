const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const nomeProduto = frm.nomeDoProduto.value;
    const preco = frm.Preco.value;

    const promo = (preco * 3) - (preco * 0.5);
    const terceiroProduto = preco * 0.5;

    saida.innerText = `${nomeProduto} - Promoção: Leve 3 por R$: ${promo.toFixed(2)} \n O terceiro produto custa apenas R$: ${terceiroProduto.toFixed(2)}`

    e.preventDefault();
})