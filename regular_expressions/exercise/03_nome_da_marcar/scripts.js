const nomeDaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(nomeDaMarca.test("Marca: Nike"));
console.log(nomeDaMarca.test("Marca: Adidas"));
console.log(nomeDaMarca.test("Marca: Puma"));
console.log(nomeDaMarca.test("Marca: Asics"));
console.log(nomeDaMarca.test("Marca: "));
console.log(nomeDaMarca.test("Asics"));
console.log(nomeDaMarca.test("Marca: Hocks"));