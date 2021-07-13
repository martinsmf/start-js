// shift remove o primeiro item do array e unshift adiciona

let car = ['BMW', 'Audi', 'Vw', 'FIAT']

let removedFirstCar = car.shift();
console.log(removedFirstCar);
console.log(car);

car.unshift('Mercedes');
console.log(car[0]);
console.log(car);