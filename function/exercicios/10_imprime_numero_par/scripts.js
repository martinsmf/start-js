function decrementeEImprimeNumeroPar(num) {

    for (let i = num; 0 < i; i--) {
        if (i % 2 == 0) {
            console.log('É par ' + i)
        }
    }
}


decrementeEImprimeNumeroPar(10)