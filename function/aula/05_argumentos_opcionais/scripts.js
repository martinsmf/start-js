function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(2))
console.log(soma(undefined, 3))
console.log(soma(5, 15))

function cumprimento(nome, idade) {
    if (idade === undefined) {
        console.log("Olá, " + nome);
    } else {
        console.log(`Olá, ${nome} você tem ${idade} anos`);
    }
}

cumprimento("Matheus");

cumprimento("Gabriel", 23)