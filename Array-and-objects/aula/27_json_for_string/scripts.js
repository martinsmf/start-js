//json
let person = {
    "name": "Matheus",
    "idade": 27,
    "profession": "Developer",
    "hobbies": ["Games", "Leitura", "Correr"]
}

console.log(person);
console.log(typeof person);

let textPerson = JSON.stringify(person);

console.log(textPerson);
console.log(typeof textPerson);

let jsonPerson = JSON.parse(textPerson);

console.log(jsonPerson);
console.log(typeof jsonPerson);

console.log(jsonPerson.hobbies[0]);