class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au")
    }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol()

Cachorro.prototype[patas] = 4

let dogArgentino = new Cachorro("Dog argentino", "Amarelo")

console.log(dogArgentino)
console.log(dogArgentino[patas])

dogArgentino.latir()

console.log(Cachorro.prototype[patas])

console.log(Cachorro)