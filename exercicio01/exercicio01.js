function exibeTexto () {
  document.getElementById('resultado').innerHTML = 'Pressione F12 para ver o resultado no console'

  var backtick = 'Template literals'

  console.log('Aqui utilizei Aspas simples')
  console.log("Aqui utilizei Aspas duplas")
  console.log(`Aqui utilizei ${backtick}`)
}