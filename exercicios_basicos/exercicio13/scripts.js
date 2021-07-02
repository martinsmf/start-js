console.log('Par ou ímpar')

for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`O numero ${i} é par`)
    } else {
        console.log(`O numero ${i} é ímpar`)
    }
}

console.log('Números primos')

let numero = parseInt(prompt("Digite um numero"))
let cont = 0

console.log(numero)

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        cont++
    }
}

console.log(cont)

if (cont == 2) {
    console.log("O número é primo")
} else {
    console.log("O número não é primo")
}