const frm = document.querySelector('form');
const respErros = document.getElementById('erros');
const respChances = document.getElementById('chances');
const respDicas = document.getElementById('dicas');


const Erros = []  //vetor que receberá os números apostados 
const Num_Sorteado = Math.floor(Math.random() * 100) + 1
console.log(Num_Sorteado)
const Chances = 6


frm.addEventListener("submit", (e) => {

    const numero = Number(frm.entrada.value);

    if (numero == Num_Sorteado){
        respDicas.innerText = `Parabéns, você acertou! O número sorteado é ${Num_Sorteado}`
        frm.btSubmit.disabled = true
    } else {
        if (Erros.includes(numero)){
            alert(`O número ${numero} já foi apostado, tente outro.`)
        } else {
            Erros.push(numero);
            const numDeErros = Erros.length;
            const numDeChances = Chances - numDeErros;
            respErros.innerText = numDeErros
            respChances.innerText = numDeChances
            if (numDeChances == 0){
                frm.btSubmit.disabled = true
                respDicas.innerText = `Game Over! O número sorteado era: ${Num_Sorteado}`
                alert('Suas chances acabaram')
            } else {
                const dica = numero < Num_Sorteado ? "maior" : "menor"  //uso do operador ternário.
                respDicas.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }

    frm.entrada.value = ""
    frm.entrada.focus()


    e.preventDefault()
})
