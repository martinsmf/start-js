function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function () {
    console.log("Auuu")
}

Cachorro.prototype.latir = function () {
    console.log("Au au")
}

let husky = new Cachorro("Husky", 4, "Cinza")

console.log(husky)

husky.uivar()
husky.latir()

console.log(Object.getPrototypeOf(husky) === Cachorro)