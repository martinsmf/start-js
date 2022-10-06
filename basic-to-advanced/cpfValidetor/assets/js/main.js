function validaCpf() {
  let cpf = '705.484.450-52'
  let cleanCpf = cpf.replace(/\D+/g, '');
  let firstDigit;
  let secondDigit;
  let digit = cleanCpf[9] + cleanCpf[10];
  let ac = 0

  const arrayFirstDigit = [10, 9, 8, 7, 6, 5, 4, 3, 2];

  const arraySecondDigit = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];


  for (let i = 0; i < 9; i++) {
    ac += arrayFirstDigit[i] * Number(cleanCpf[i]);
  }
  firstDigit = 11 - (ac % 11) > 9 ? 0 : (11 - (ac % 11));
  ac = 0

  for (let i = 0; i <= 9; i++) {
    ac += arraySecondDigit[i] * Number(cleanCpf[i]);
  }
  secondDigit = 11 - (ac % 11) > 9 ? 0 : (11 - (ac % 11));

  firstDigit = String(firstDigit);
  secondDigit = String(secondDigit);
  let valid = firstDigit + secondDigit;

  if (valid === digit) {
    return console.log(true)
  }

  console.log(false)

}

validaCpf();