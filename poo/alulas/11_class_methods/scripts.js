class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au")
    }
}

Cachorro.prototype.patas = 4;

let dogArgentino = new Cachorro("Dog argentino", "Amarelo")

console.log(dogArgentino)

dogArgentino.latir()