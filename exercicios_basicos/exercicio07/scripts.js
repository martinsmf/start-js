let idade = prompt("Qual a sua idade?")

if (idade >= 18) {
    document.getElementById("resp").innerHTML = "Pode entrar!"
} else {
    document.getElementById("resp").innerHTML = "Não pode entrar"
}