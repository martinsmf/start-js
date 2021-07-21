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

let labrador = new Cachorro("Labrador", 4, "Amarelo")

console.log(labrador)

labrador.uivar()