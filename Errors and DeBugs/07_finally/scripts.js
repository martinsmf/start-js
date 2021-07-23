let b = 2;
try {
    let a = 2 + b;

} catch (error) {
    console.log(error)
} finally {
    console.log("executou")
}

console.log("teste")