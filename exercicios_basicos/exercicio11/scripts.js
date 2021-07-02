let idade = 17;
let cnh = false

if (idade >= 18 && cnh == true) {
    console.log("Você pode dirigir")
} else if (idade >= 18 && cnh != true) {
    console.log('Você não pode dirigir mas pode se habilitar para isso.')
} else {
    console.log("Você precisar ter 18 anos e ser habilitador")
}