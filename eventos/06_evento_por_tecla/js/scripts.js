window.addEventListener('keydown', function (e) {
    if (e.key == 'q') {
        console.log('Pressionou a tecla Q')
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        console.log('Pressionou o Enter')
    }
})

window.addEventListener('keypress', (e) => {
    if (e.key == 'v') {
        console.log(e.key)
    }
})

