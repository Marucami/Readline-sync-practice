const readlineSync = require('readline-sync');
const generateRandomEquation = () => {
    const a = readlineSync.question('Введите любое число ');
    const b = readlineSync.question('Введите любое число ');
    const c = readlineSync.question('Введите любое число ');
return `${a}x + ${b} = ${c}`;
}
console.log(generateRandomEquation());

