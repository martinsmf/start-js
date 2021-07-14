// A way from a function to receive undefined parameters

let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;

function printNumbers(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

printNumbers(num, num2, num3)
console.log('Pause')
printNumbers(num4, num5, num6)
console.log('Pause')
printNumbers(4, 5, 6, 7, 6, 8, 20, 22, 23, 40, 7, 60, 748, 85, 96)