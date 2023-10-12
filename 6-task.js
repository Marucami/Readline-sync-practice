const readlineSync = require('readline-sync');
const calculateTime = () => {
const distance = readlineSync.question('Введите расстояние в км ');
const speed = readlineSync.question('Введите скорость в км/ч ');
const minutes = distance * 60 / speed;
return `${Math.floor(minutes / 60)}ч , ${minutes % 60}м`;
}
console.log(calculateTime());


