function tipoDeDado(dado) {
    if (typeof dado === 'string') {
        console.log(`O dado ${dado} informado é to tipo string`)
    } else if (typeof dado === 'number') {
        console.log(`O dado ${dado} informado é to tipo Number`)
    } else if (typeof dado === 'boolean') {
        console.log(`O dado ${dado} informado é to tipo boolean`)
    }
}

tipoDeDado(5)
tipoDeDado("Matheus")
tipoDeDado(true)