const readlineSync = require('readline-sync');
const incomeTaxCalculator = (income) => { 
    const procent = 0.15;
    return income * procent;
}
const income = readlineSync.question('Введите свой доход(убери от числа в голове пару нулей) ');
console.log('Сумму налога на доходы', incomeTaxCalculator(income),', теперь ваша попа наша!');