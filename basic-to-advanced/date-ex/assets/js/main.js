const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString(
  'pt-BR',
  {
    dateStyle: 'full',
    timeStyle: 'medium'
  }
);

// function dateToday() {
//   const dayName = weekDay();
//   const monthName = month();
//   const day = monthDay();
//   const catchHour = hour();
//   const catchMinutes = minutes();
//   const catchYear = year();

//   const title = section.querySelector('h1')
//   title.innerHTML = `${dayName}, ${day} de ${monthName} de ${catchYear} ${catchHour}:${catchMinutes}`

// }

// function monthDay() {
//   const day = date.toLocaleString('Pt-Br', { day: 'numeric' });
//   return day;
// }

// function month() {
//   const month = date.toLocaleString('Pt-Br', { month: 'long' });
//   return month;
// }

// function weekDay() {
//   const day = date.toLocaleString('Pt-Br', { weekday: 'long' });
//   return day;
// }

// function year() {
//   const year = date.toLocaleString('Pt-Br', { year: 'numeric' });
//   return year;
// }

// function hour() {
//   const hour = date.toLocaleString('Pt-Br', { hour: 'numeric' })
//   return hour;
// }

// function minutes() {
//   const minute = date.toLocaleString('Pt-Br', { minute: 'numeric' })
//   return minute;
// }

// dateToday();
