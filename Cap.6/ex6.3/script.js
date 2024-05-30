const frm = document.querySelector("form")
const saida = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const modelo = frm.entModel.value
    const preco = Number(frm.entPreco.value)
    carros.push({modelo, preco})

    frm.entModel.value = ""
    frm.entPreco.value = ""
    frm.entModel.focus()

    //dispara um evento clique no botão de listar (como se o usuário tivesse clicado) 
    frm.btListar.dispatchEvent(new Event("click")) 
})

//função do btListar
frm.btListar.addEventListener("click", ()=>{
    //verificação para ver se há algum objeto na lista a ser apresentado
    if (carros.length == 0){
        alert('Não há carros na lista')
        return
    }

    const Cadastrados = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")

    saida.innerText = `Lista de carros cadastrados: \n ${"-".repeat(40)} \n ${Cadastrados}`
})

