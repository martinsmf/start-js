let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nome = ["Maria", "João", "Jose"];
let boolean = [true, false, true];
let mix = ["Matheus", true, 10]

//Acessando a posição 

console.log(arr[4]);
console.log(nome[2]);
console.log(nome[1]);
console.log(boolean[1]);


let encontrar;
for (let i = 0; i < mix.length; i++) {
    if (typeof mix[i] == 'boolean') {
        console.log(mix[i])
    }
}