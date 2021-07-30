const terminaComId = /[0-9]ID$/;

console.log(terminaComId.test("123ID"));
console.log(terminaComId.test("abdID"));

console.log("---")
const terminaComId2 = /\d+ID\b/;

console.log(terminaComId2.test("123ID"));
console.log(terminaComId2.test("123"));
console.log(terminaComId2.test("abdID"));