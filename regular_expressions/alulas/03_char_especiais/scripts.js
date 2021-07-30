console.log("Aceita qualquer carácter");
const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

console.log("Aceita quanto tem dígitos");
const dRegex = /\d/; // = [0-9];

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

console.log("Aceita apenas quando tem letras");
const dRegex2 = /\D/; // = [^0-9];

console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));

console.log("Aceita quanto tem espaços vazios")
const sRegex = /\s/;

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

console.log("Só aceita carácter alfanumérico")
const wRegex = /\w/;

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));