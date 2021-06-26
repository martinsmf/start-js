function exibeTexto () {
  document.getElementById('resultado')
  .innerHTML = 'Pressione F12 para ver o resultado no console'

  var backtick = (5 + "5teste123") * 2

  
  console.log(`${backtick}`)
}