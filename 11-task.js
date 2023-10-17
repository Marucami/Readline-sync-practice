const readlineSync = require('readline-sync');
const generateRandomEquation = () => {
    const salary = readlineSync.question('Укажите свою зарплату ');
    const performanceRating = readlineSync.question('Укажите свой рейтинг производительности ');
    if (performanceRating > 8) {
        return salary * 0.2;
        } else {
        return salary * 0.1;
        }
}
console.log(generateRandomEquation());