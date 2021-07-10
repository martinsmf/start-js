function positivo(number) {
    if (typeof number !== 'number' && Math.sign(number) !== -0 && Math.sign(number) !== -1) {
        console.log(`O "${number}" é um valor invalido, gentiliza informar números negativos`)
    } else if (Math.sign(number) == -1 || Math.sign(number) == -0) {
        console.log(Math.abs(number))
    }
}

positivo(-2)
positivo("teste")