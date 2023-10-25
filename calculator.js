const readlineSync = require('readline-sync');
const incomeTaxCalculator = () => { 
    const income = readlineSync.question('Введите свой доход(убери от числа в голове пару нулей): ');
    const procent = 0.15;
    return income * procent;
}

console.log('Сумму налога на доходы', incomeTaxCalculator(),', теперь ваша попа наша!');