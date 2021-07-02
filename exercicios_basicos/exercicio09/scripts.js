function potencia() {
    let base = parseInt(document.getElementById('powBase').value)
    let expoente = parseInt(document.getElementById('powExpoente').value)

    let resp = Math.pow(base, expoente)
    let exibeResultado = document.getElementById('resp')
    exibeResultado
        .append(`A potência de ${base} elevado ao expoente ${expoente} e: ${resp}`)
}