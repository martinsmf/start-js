class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(valor) {
        this.saldoCC += valor;
    }

    saque(valor) {
        this.saldoCC -= valor;
    }

    tranferenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    tranferenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    jurosAniversario() {
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros * 2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.tranferenciaCP(3000)

conta.jurosAniversario()

console.log(conta)

let contaEspecial = new ContaEspecial(10000, 50000, 1)

console.log(contaEspecial)

contaEspecial.saque(5000)

console.log(contaEspecial)

contaEspecial.jurosAniversario()

console.log(contaEspecial)