const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const name = frm.nome.value;
    const VeriSexo = frm.Masc.checked; 
    const altura = frm.Alt.value;

    let peso;
    if (VeriSexo == true){
        peso = 22 * Math.pow(altura,2)
    } else {
        peso = 21 * Math.pow(altura,2)
    }

    saida.innerText = `${name}: Seu peso ideal é ${peso}`

    e.preventDefault();
})