let numeroDecimal = document.getElementById("input")
let numeroBinario = []
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")

function gerarBinario(){
    let valorNumero = Number(numeroDecimal.value)
    while(valorNumero >= 1){
        numeroBinario.unshift(valorNumero % 2)
        valorNumero = Math.trunc(valorNumero / 2 )
    }
    
    resultado.innerHTML = numeroBinario.join("")
}

button.addEventListener("click", gerarBinario)
