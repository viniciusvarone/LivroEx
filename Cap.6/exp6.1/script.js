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
    //para caso não houver nome de paciente no input
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.")
        frm.inPaciente.focus()
        return
    }

    const nomePac = frm.inPaciente.value;
    Pacientes.unshift(nomePac);

    let lista = ""
    Pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${paciente}\n`
    });

    saidaLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})


//terceiroBt: Função de atendimento.
frm.BtAtd.addEventListener("click", () => {

    if (Pacientes.length == 0){
        alert("Não há pacientes na lista de espera. Adicione um.")
        frm.inPaciente.focus();
        return
    }

    const nomeAtd = Pacientes.shift();

    saidaNome.innerText = nomeAtd;

    lista = ""
    Pacientes.forEach((paciente, i ) =>{
        lista += `${i + 1}. ${paciente} \n`
    })

    saidaLista.innerText = lista;
    frm.inPaciente.focus();
})
