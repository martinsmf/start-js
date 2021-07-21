let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function () {
        console.log("Au au")
    }
}

let labrador = Object.create(cachorro);

console.log(labrador.hasOwnProperty("latir"));
labrador.latir();

labrador.raca = "labrador";

console.log(labrador);
console.log(labrador.hasOwnProperty("raca"));
console.log(labrador.raca);
console.log(cachorro.hasOwnProperty("raca"));
console.log(cachorro.raca);

console.log(Object.getPrototypeOf(labrador));