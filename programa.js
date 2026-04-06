let numeroDecimal = 87
let numeroBinario = []

while(numeroDecimal >= 1){
    numeroBinario.unshift(numeroDecimal % 2)
    numeroDecimal = Math.trunc(numeroDecimal / 2 )
}


console.log(numeroBinario.join(""))