const calculator = {
    sum: (num1, num2) => {
        return num1 + num2;
    },
    subtraction: (num1, num2) => {
        return num1 - num2;
    },
    multiplication: (num1, num2) => {
        return num1 * num2;
    },
    division: (num1, num2) => {
        return num1 / num2;
    }
}

console.log(calculator.sum(3, 2))
console.log(calculator.subtraction(10, 2))
console.log(calculator.multiplication(5, 5))
console.log(calculator.division(24, 4))