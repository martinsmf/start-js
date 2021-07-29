const validateEmail = /\w+@\w+\.\w+/;

console.log(validateEmail.test("matheus@gmail.com"));
console.log(validateEmail.test("matheus@gmail"));
console.log(validateEmail.test("matheus.com"));
console.log(validateEmail.test("@gmail.com"));