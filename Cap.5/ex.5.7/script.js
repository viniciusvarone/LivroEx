const frm = document.querySelector('form');
const saida = document.querySelector('h3');

frm.addEventListener("submit", (e) => {

    const entrada = Number(frm.entrada.value);
    let conjunto = "*";
    

    for (let i = 1; i < entrada; i++){

        let lastSymbol = conjunto[conjunto.length - 1];

        if (lastSymbol == "*"){
            conjunto = conjunto + "-"
        } else {
            conjunto = conjunto + "*"
        }
    }

    saida.innerText = conjunto;

    e.preventDefault()
})

