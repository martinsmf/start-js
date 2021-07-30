const validateDomain = /[?www.]\w+\.com.br|.com/;

console.log(validateDomain.test("www.google.com"));
console.log(validateDomain.test("www.horadecodar.com.br"));
console.log(validateDomain.test("www.horadecodar"));
console.log(validateDomain.test("horadecodar.com.br"));
