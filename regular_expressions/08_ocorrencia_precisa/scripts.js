const cep = /\d{5}-\d{3}/;

console.log(cep.test("35478-032"));//true
console.log(cep.test("35478-03b"));//false
console.log(cep.test("aabbb-03b"));//false


console.log("telefone")
const tel = /\(\d{2}\)\s?\d{4,5}-\d{4}/;

console.log(tel.test("(31) 99999-9999"));//true
console.log(tel.test("(31) 7777-9999"));//true
console.log(tel.test("(31)8888-9999"));//true
console.log(tel.test("(31)98888-9999"));//true
console.log(tel.test("(31)988889999"));//false
console.log(tel.test("31988889999"));//false