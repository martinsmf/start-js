function exibeTexto () {
  document.getElementById('resultado').innerHTML = 'Pressione F12 para ver o resultado no console'

  var backtick = 15/2

  console.log('number '+ 5)
  console.log("number casa decimal ", 1.2)
  console.log(`Resultado  ${backtick}`)
}