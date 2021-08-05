console.log("Código antes do callback");

setTimeout(function () {
    console.log("Callback executado");
}, 2000);

console.log("Código depois do callback 1");
console.log("Código depois do callback 2");
console.log("Código depois do callback 3");