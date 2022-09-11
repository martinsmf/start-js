const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
]
const section = document.querySelector('.container');
const div = document.createElement('div');

function criaElementoHtml({ tag, texto }) {
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  return div.appendChild(tagCriada);
}

for (let i = 0; i < elementos.length; i++) {
  section.appendChild(criaElementoHtml(elementos[i]));
}