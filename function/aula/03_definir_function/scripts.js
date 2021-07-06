let y = 10;

function imprimir() {
    let y = 150;
    console.log(y);
}

imprimir()

console.log(y)

let x = 10

if (x > 5) {
    let x = 20;
    x++;
    console.log(x);
}

console.log(x)


// escopo aninhado

let z = 10;

function multiplicar(x, y) {
    let z = x * y;

    if (z > 10) {
        let z = 0;
        console.log(z);
    }

    console.log(z)
}

console.log(z)

multiplicar(3, 7)