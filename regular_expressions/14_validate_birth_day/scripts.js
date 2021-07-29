const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2021]{4}/;

console.log(validarDataNasc.test("05/07/2021"));//false
console.log(validarDataNasc.test("5/7/2021"));//false
console.log(validarDataNasc.test("05/07/21"));//false
console.log(validarDataNasc.test("99/99/9999"));//false
console.log(validarDataNasc.test("15/12/2020"));//false
console.log(validarDataNasc.test('12/12/1999'));//true
console.log(validarDataNasc.test('31/00/2010'));//true

console.log("gabarito");

const validarDataNascGabarito = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNascGabarito.test('05/02/2000'));//false
console.log(validarDataNascGabarito.test('5/2/2000'));//false
console.log(validarDataNascGabarito.test('05-02-2000'));//false
console.log(validarDataNascGabarito.test('05/02/00'));//false
console.log(validarDataNascGabarito.test('12/12/1999'));//true
console.log(validarDataNascGabarito.test('99/99/9999'));//false
console.log(validarDataNascGabarito.test('31/00/2010'));//true