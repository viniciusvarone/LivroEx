const frm = document.querySelector('form');
const saidaNome = document.querySelector('span');
const saidaLista = document.querySelector('pre');

const Pacientes = []

//primeiroBotão: Função de adicionar.
frm.addEventListener("submit", (e)=>{

    const nome = frm.inPaciente.value;
    Pacientes.push(nome)

    let lista = ""
    for (let i = 0; i < Pacientes.length; i++){
        lista += `${i + 1}. ${Pacientes[i]} \n`
    }

    saidaLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();

    e.preventDefault()
})


//segundoBotão: Função de urgência.
frm.BtUrg.addEventListener("click", ()=>{
    
})
