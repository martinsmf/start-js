function mutiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(mutiplicarTresNumeros(3, 2, 4));

const mult = mutiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é: " + mult);

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19, true))
console.log(podeDirigir(29, true))
console.log(podeDirigir(17, false))
console.log(podeDirigir(18, 1))
console.log(podeDirigir(10, 0))
console.log(podeDirigir(40, 0))