let novoElemento = document.createElement('p');
let texto = document.createTextNode('Algum texto');
novoElemento.appendChild(texto);
let p = document.querySelector('#paragrafo-principal');
let elementoPai = p.parentNode;

elementoPai.appendChild(novoElemento);