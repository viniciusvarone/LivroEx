const frm = document.querySelector("form");
const Saidatitulo = document.querySelector("h3");
const SaidaDuracao = document.querySelector("h4");

frm.addEventListener("submit", (e)=>{
    const titulo = document.querySelector("#filme").value;  //obtem o conteudo dos campos
    const TotalMin = document.querySelector('#duracaoMin').value;

    const partHoras = Math.floor(TotalMin/60); 
    const partMin = TotalMin % 60;

    Saidatitulo.innerText = titulo;
    SaidaDuracao.innerText = `${partHoras} hora(s) e ${partMin} minuto(s)`

    e.preventDefault();
})

