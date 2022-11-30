// export const nome = 'Matheus';
// export const sobrenome = 'Martins';
// export const idade = '29';

const nome = 'Matheus';
const sobrenome = 'Martins';
const idade = '29';

function soma(x, y) {
  return x + y;
}

export default (x, y) => x * y;

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// export { nome, sobrenome, idade, soma };

export { nome, sobrenome, idade, soma }

