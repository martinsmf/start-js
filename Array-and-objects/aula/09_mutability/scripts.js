let person = {
    name: 'Matheus'
}

let person2 = person;

let person3 = {
    name: "Sherlock"
}

console.log('person == person2');
console.log(person == person2);
console.log('person == person3');
console.log(person == person3);
console.log('person2 == person3');
console.log(person2 == person3);

// O objeto person2 pe uma referencia do primeiro então quando alteramos o segundo que recebeu as 
// características do primeiro, automaticamente alteramos os dois objetos
person2.name = 'John';

console.log(person.name)

person.name = "Maria"
console.log(person2.name)