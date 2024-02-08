const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const horaBrasil = Number(frm.Entrada.value);
    const horaFranca = Number(horaBrasil + 5);

    if (horaFranca >= 24){
        HfrancAdapted = Number(horaFranca - 24);
        saida.innerText = `Hora na França: ${HfrancAdapted.toFixed(2)}`
    } else {
        saida.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
    }

    e.preventDefault()
})