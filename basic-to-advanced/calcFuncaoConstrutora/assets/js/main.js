function Calculadora() {
  const display = document.querySelector('.display');

  this.inicia = function () {
    clickButtons();
    // keyPress();
  };

  function clickButtons() {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText);
      }
      if (el.classList.contains('btn-clear')) {
        clearDisplay();
      }
      if (el.classList.contains('btn-del')) {
        deleteOne();
      }
      if (el.classList.contains('btn-eq')) {
        realizaConta();
      }

    });
  }

  function btnParaDisplay(valor) {
    display.value += valor;
  }

  function clearDisplay() {
    display.value = '';
  }

  function deleteOne() {
    display.value = display.value.slice(0, -1);
  }

  function realizaConta() {
    let conta = display.value;

    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta invalida');
        return;
      }
      display.value = conta;
    } catch (error) {
      alert('Conta invalida')
      return;
    }
  }

}

const calc = new Calculadora();
calc.inicia();
