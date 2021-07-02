const nome = prompt("Qual é o meu nome")

if (nome === "Matheus") {
    document.getElementById("resp").innerText = `Olá, ${nome}`
} else if (nome === "" || nome === null) {
    alert('O nome não pode ficar em branco.')
} else {
    let resposta = document.getElementById("resp")
    resposta.append(`Não é o Matheus`)
}