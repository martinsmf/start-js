let velocidade = prompt('Velocidade')

if (velocidade > 80) {
    console.log('Você foi multado')
} else if (velocidade <= 80 && velocidade >= 60) {
    alert('Parabéns você esta na velocidade correta')
} else {
    console.log('Você está muito devagar')
}