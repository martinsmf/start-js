function recursao(n) {
    if (n - 1 < 2) {
        console.log("Recursão parou")
    } else if (n % 2 != 0) {
        console.log("Número ímpar " + n);
        recursao(n - 1);
    } else {
        console.log("Número par " + n);
        recursao(n - 2);
    }
}

recursao(5);
recursao(55);