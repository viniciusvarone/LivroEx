const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{

    const fruta = frm.EntFruta.value;
    const numero = frm.EntNum.value;

    let acumulador = "";

    for(let i = 1; i <= numero; i++){
        if (i == numero){
            acumulador = acumulador + fruta;
        } else {
            acumulador = acumulador + `${fruta } *`;
        }
    }

    saida.innerHTML = acumulador;

    e.preventDefault();
})
