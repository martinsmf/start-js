const divP = document.querySelector('.div-p');
const paragrafos = divP.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const estiloSection = getComputedStyle(document.querySelector('section'));
const backgroundColorSection = estiloSection.backgroundColor;

console.log(backgroundColorBody);
for (let p of paragrafos) {
  console.log(p)
  p.style.color = backgroundColorSection;
  p.style.backgroundColor = backgroundColorBody;
}