function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let caneCorso = criarCachorro("Cane Corso", 4, "Perto");

console.log(caneCorso);