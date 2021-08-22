let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('mousedown', function () {
    console.log('Apertou o botão');
})


btn2.addEventListener('mouseup', () => {
    console.log('Soltou o botão');
})

btn3.addEventListener('dblclick', () => {
    console.log('Clicou duas vezes');
})

btn4.addEventListener('contextmenu', function (e) {
    e.preventDefault(); //Para não abrir o menu que é o evento default do botão direito no browser
    console.log('Botão direito');
})