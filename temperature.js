const readlineSync = require('readline-sync');
const celsiusToFahrenheit= () => { 
    const celsius = readlineSync.question('Введите градусы в Цельсиях ');
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log('Температура в Фаренгейтах', celsiusToFahrenheit());