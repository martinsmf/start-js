import mut, { nome, sobrenome, idade, soma, Pessoa } from './modulo1';

import * as MeuModulo from './modulo1';
// import soma from './modulo1';

// console.log(nome, sobrenome, idade);
// console.log(soma(3, 4))

const p1 = new Pessoa(nome, sobrenome);

// console.log(p1);

console.log(MeuModulo);
console.log(soma(2, 4));
console.log(mut(2, 4));
console.log(p1)