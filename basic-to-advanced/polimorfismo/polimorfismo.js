function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo Insuficiente ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
}
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
}
Conta.prototype.verSaldo = function () {
  console.log(`Ag/c ${this.agencia} ${this.conta} | ${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if ((this.saldo + this.limite) < valor) {
    console.log(`Saldo Insuficiente ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo,) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(30);
// conta1.sacar(0.01);

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log()

const contaPupanca = new ContaPoupanca(12, 33, 0);
contaPupanca.depositar(10);
contaPupanca.sacar(110);
contaPupanca.sacar(1);