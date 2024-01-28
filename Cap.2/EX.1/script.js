const frm = document.querySelector('form')
const nome = document.querySelector('#caixaNome');
const frase = document.querySelector('h3');

frm.addEventListener("submit", (e)=>{
    const nme = nome.value
    frase.innerText = `Olá ${nme}`
    e.preventDefault()  //evita envio do formulário. A página não irá reinicializar
})

