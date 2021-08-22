let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector('a')

function msg(e) {
    console.log('clicou no botão');
    e.stopPropagation();
}

btn1.addEventListener('click', msg);


btn2.addEventListener('click', (event) => {
    console.log(event);
});

p.addEventListener('click', function () {
    console.log('Clicou no paragrafo');
})

a.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Não vai mudar de link')
})

window.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Scroll')
})