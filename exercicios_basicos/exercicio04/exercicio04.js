function exibeTexto () {
  document.getElementById('resultado')
  .innerHTML = 'Pressione F12 para ver o resultado no console'

  var backtick = !(5 != "5")

  console.log('5 > 4 || 4 <= 5: ',5 > 4 || 4 <= 5)
  console.log('10 > 6 && 7 >= 8 ', 10 > 6 && 7 >= 8 ) 
  console.log(`!(5 != "5")  ${backtick}`)
}