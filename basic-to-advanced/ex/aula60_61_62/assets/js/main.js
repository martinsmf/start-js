// const max = (num1, num2) => num1 > num2 ? num1 : num2;
// console.log(max(5, 50));

// const ePaisagem = (largura, altura) => largura >= altura;

// console.log(ePaisagem(3, 4));

// let i = 0;
// while (i <= 100) {
//   console.log(t(i));
//   i++;
// }

function t(x) {
  if (x % 3 === 0 && x % 5 === 0) {
    return `${x} FizzBuzz`;
  }
  if (x % 3 === 0) {
    return `${x} Fizz`;
  }
  if (x % 5 === 0) {
    return `${x} Buzz`;
  }
  return x;
}

console.log(t('m'));