const not = /[^ab]/;

console.log(not.test("a"));//false
console.log(not.test("b"));//false
console.log(not.test("ab"));//false
console.log(not.test("Aqui tem ab"));//true

const not2 = /[^a-z]/;

console.log(not2.test("123 as")); //true
console.log(not2.test("dsaasfdser"));//false
console.log(not2.test("dsaasfdser123"));//true