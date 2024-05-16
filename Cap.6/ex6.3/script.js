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

    console.log(carros)
})