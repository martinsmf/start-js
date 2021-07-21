const cachorro = {
    raca: 'SRD',
    uivar: function () {
        console.log("Auuuuuuu");
    },
    rosnar: function () {
        console.log("Grrrr");
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Pit bull");

console.log(cachorro.raca);

console.log(cachorro.getRaca());