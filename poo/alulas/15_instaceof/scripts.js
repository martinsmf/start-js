class Canideos {
    constructor(patas) {
        this.patas = patas
    }

    andar() {
        console.log("Andando")
    }
}

let loboGuara = new Canideos(4);

console.log(loboGuara.patas);

class Cachorro extends Canideos {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca;
    }

    latir() {
        console.log("Au au");
    }
}


let pug = new Cachorro(4, "Pug");

pug.andar();
pug.latir();
console.log(pug.patas);

console.log(pug instanceof Canideos)
console.log(new Cachorro instanceof Canideos)
console.log(loboGuara instanceof Canideos)