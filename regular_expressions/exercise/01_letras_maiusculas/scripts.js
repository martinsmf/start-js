const letrasMaiusculas = new RegExp("([A-Z][^a-z][^\d])");

console.log(letrasMaiusculas.test("Matheus"));//false
console.log(letrasMaiusculas.test("123"));//false
console.log(letrasMaiusculas.test(" "));//false
console.log(letrasMaiusculas.test("MaThEuS"));//false
console.log(letrasMaiusculas.test("matheus"));//false
console.log(letrasMaiusculas.test("MATHEUS12"));//false
console.log(letrasMaiusculas.test("MATHEUS"));//true

console.log("---")
const validaMaiuscula = /[A-Z][^a-z][^0-9]+/

console.log(validaMaiuscula.test("Matheus"));
console.log(validaMaiuscula.test("matheus"));
console.log(validaMaiuscula.test("123"));
console.log(validaMaiuscula.test("MATHEUS12"));//false