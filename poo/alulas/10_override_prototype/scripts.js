class Cachorro {

    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    uivar(params) {
        console.log("Auuuu");
    }
}

Cachorro.prototype.raca = "SRD"
Cachorro.prototype.patas = 4

let labrador = new Cachorro("Labrador", 4, "Amarelo")

console.log(labrador)

labrador.uivar()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)