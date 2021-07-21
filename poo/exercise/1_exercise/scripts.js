let conta = {
    saldo: 0,
    iniciarSaldo: saldo => {
        this.saldo = saldo;
    },
    deposito: saldo => {
        this.saldo += saldo;
    },
    saque: valor => {
        this.saldo -= valor;
    },
    getSaldo: () => {
        return this.saldo
    }
}


conta.iniciarSaldo(1000);

conta.deposito(1000)

console.log(conta.getSaldo());

conta.saque(500);

console.log(conta.getSaldo());

conta.deposito(200);

console.log(conta.getSaldo())


console.log("class es6")

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let contaBancaria = new ContaBancaria(1000);

contaBancaria.deposito(1000);

console.log(contaBancaria.saldo);

contaBancaria.saque(800);

console.log(contaBancaria.saldo);