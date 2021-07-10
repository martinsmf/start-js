function checarTamanhoDoTexto(texto) {
    if (texto.length > 10) {
        console.log('Texto muito grande');
    } else {
        console.log('Texto dentro do limite');
    }
}

checarTamanhoDoTexto("Boa noite pessoal");
checarTamanhoDoTexto("Matheus");
checarTamanhoDoTexto("Matheus FM");