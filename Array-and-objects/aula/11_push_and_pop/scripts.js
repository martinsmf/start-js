//pop remove o ultimo elemento do array, push adiciona um elemento no final do array, 
let names = ["Matheus", "Maria", "José"];

let removedName = names.pop()

console.log(removedName)
console.log(names)


let index = names.indexOf("Maria")

names.splice(index)
names.push('Pedro')
console.log(names)


console.log(names)
