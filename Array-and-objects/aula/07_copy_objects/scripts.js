let car = {
    door: 2,
    trunk: '2000L',
    motor: 2.0
}

let additional = {
    sunroof: true,
    airConditioning: false
}

console.log(car);

Object.assign(car, additional);

console.log(car);