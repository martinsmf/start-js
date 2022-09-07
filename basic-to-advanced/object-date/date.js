// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

//const data = new Date(2019, 3, 20, 15, 16, 20, 999); // year, month, day, hour, minute, seconds, millie seconds 

const data = new Date('2022-09-20 20:20:59');
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Month', data.getMonth());
console.log('year', data.getFullYear());
console.log('Hour', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('ST', data.getMilliseconds());
console.log('week day', data.getDay());
