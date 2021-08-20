let a = document.querySelector('footer a')


console.log(a.getAttribute('href'))

a.setAttribute('href', 'https://www.google.com/')

console.log(a.getAttribute('href'))