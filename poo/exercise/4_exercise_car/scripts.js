class Car {
    constructor(car) {
        this.marca = car.marca;
        this.cor = car.cor;
        this.gasolinaRestante = car.gasolina;
        this.consumo = car.consumo;
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(gasolina) {
        this.gasolinaRestante += gasolina;
    }
}


let car = new Car({
    marca: "Toyota",
    cor: "Prata",
    gasolina: 30,
    consumo: 14
})

console.log(car)

car.dirigir(14)

console.log(car)

car.abastecer(3)

console.log(car)