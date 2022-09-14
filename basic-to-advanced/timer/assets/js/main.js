const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', (event) => {
  timer.innerHTML = setInterval(() => {
    return stopwatch()
  }, 1000);
})

// pausar.addEventListener('click', (event) => {
//   timer.innerHTML = "cliquei no pausar";
// })

// zerar.addEventListener('click', (event) => {
//   timer.innerHTML = "cliquei no zerar";
// })

function stopwatch() {
  let date = new Date('2022-09-20 00:00:00');

  return date.toLocaleTimeString('pt-br', {
    hour: "2-digit",
    minute: '2-digit',
    second: '2-digit'
  })
}

console.log(stopwatch());