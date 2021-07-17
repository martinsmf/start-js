let bus = {
    wheels: 8,
    passengers: 40,
    door: 2
}

bus.windows = 20;

delete bus.wheels;

console.log(bus)
console.log(bus.windows)