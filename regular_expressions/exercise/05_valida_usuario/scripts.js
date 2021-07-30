const user = /^(?=.{3,17}$)[a-z0-9-_][^@]/;

console.log(user.test("12345678912345678"));
console.log(user.test("matheus_123"));
console.log(user.test("matheus?123"));
console.log(user.test("ma"));
console.log(user.test("maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(user.test("amtheus@f"));