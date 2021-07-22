class Endereco {
    constructor(endereco) {
        this.rua = endereco.rua;
        this.bairro = endereco.bairro;
        this.cidade = endereco.cidade;
        this.estado = endereco.estado;
    }

    set setRua(rua) {
        this.rua = rua;
    }

    set setBairro(bairro) {
        this.bairro = bairro;
    }

    set setCidade(cidade) {
        this.cidade = cidade;
    }
    set setEstado(estado) {
        this.estado = estado;
    }
}

let endereco = new Endereco({
    rua: "Rua Vinte e Oito de Setembro",
    bairro: "Vila Resende",
    cidade: "Caçapava",
    estado: "SP"
})

console.log(endereco)

endereco.setEstado = "BA"

console.log(endereco)

endereco.setCidade = "Salvador"

console.log(endereco)