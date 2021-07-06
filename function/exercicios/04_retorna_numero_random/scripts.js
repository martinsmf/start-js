function retornaNumeroAleatoria(limite) {
    return Math.floor(Math.random() * limite) + 1;
}

console.log(retornaNumeroAleatoria(2))
console.log(retornaNumeroAleatoria(10))