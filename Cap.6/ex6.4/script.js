const frm = document.querySelector('form')
const saida = document.querySelector('pre')

const criancas = [];

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const Nome = frm.ChildName.value;
    const Idade = Number(frm.ChildAge.value);

    criancas.push({Nome, Idade})

    frm.ChildName.value = ""
    frm.ChildAge.value = ""
    frm.ChildName.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})


frm.btListar.addEventListener("click", ()=>{
    if (criancas.length == 0){
        alert('Não há crianças registradas ainda')
        return
    }

    const exibicao = criancas.reduce((acumulador, crianca) =>
        acumulador + crianca.Nome + " - " + crianca.Idade + " anos \n", "")

    saida.innerText = exibicao
})