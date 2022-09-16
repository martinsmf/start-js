function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  const visor = document.querySelector('.timer');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      visor.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      visor.classList.remove('pausado')
      clearInterval(timer);
      visor.innerHTML = '00:00:00';
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      visor.classList.remove('pausado')
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      visor.classList.add('pausado')
      clearInterval(timer);
    }
  });
}
relogio();