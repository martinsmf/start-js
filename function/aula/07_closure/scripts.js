function lembrarSoma(x) {
    return y => x + y;
}

let soma1 = lembrarSoma(3);
console.log(soma1(5));


function lembrarSoma2(x) {
    return function lembrar(y) {
        return x + y;
    }
}

let soma2 = lembrarSoma2(4);
console.log(soma2(16));

let soma3 = lembrarSoma2(4);
console.log(soma3(2));

function contador(i) {
    let cont = i;
    let somarContador = () => {
        console.log(cont);
        cont++
    }
    return somarContador;
}

let meuContador = contador(1)
meuContador()
meuContador()
meuContador()

function sempreSoma(i) {
    let soma = i;
    let realizarSoma = (j) => {
        soma += j
        console.log(soma)
    }
    return realizarSoma;
}
console.log('separar')
let t = sempreSoma(5)
t(2)
t(2)
t(2)
t(2)
t(2)
t(2)
t(10)
