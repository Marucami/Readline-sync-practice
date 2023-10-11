const readlineSync = require('readline-sync');
const calculateDiscount = () => { 
    const price = readlineSync.question('Цена ');
    const discountPercentage = readlineSync.question('Процент скидки ');
    return price - price * discountPercentage / 100;
}
console.log('Финальная цена', calculateDiscount());