let elemento = document.querySelector('#titulo-principal')

console.log('largura em px: ', elemento.offsetWidth) //considera as bordas
console.log('Altura em px: ', elemento.offsetHeight)

console.log('largura em px desconsiderando a borda: ', elemento.clientWidth) // desconsidera as bordas
console.log('Altura em px desconsiderando a borda: ', elemento.clientHeight)