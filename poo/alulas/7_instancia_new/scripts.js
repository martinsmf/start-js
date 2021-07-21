function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log("Auuu")
    }
}

let husky = new Cachorro("Husky", 4, "Cinza")

console.log(husky)

console.log(Object.getPrototypeOf(husky) === Cachorro)