function criaCalculadora() {
  return {
    display: document.querySelector('.display'),


    inicia() {
      this.clickButtons();
      this.keyPress();
    },
    clickButtons() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
    clearDisplay() {
      this.display.value = '';
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    keyPress() {
      this.display.addEventListener('keypress', e => {
        console.log(e)
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      })
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert('Conta invalida');
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert('Conta invalida');
        return;
      }
    }
  }
}

const calculadora = criaCalculadora();
calculadora.inicia();