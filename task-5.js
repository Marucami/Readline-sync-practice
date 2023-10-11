const readlineSync = require('readline-sync');
const calculateDistance = () => { 
    const x1 = readlineSync.question('x1 ');
    const y1 = readlineSync.question('y1 '); 
    const x2 = readlineSync.question('x2 ');
    const y2 = readlineSync.question('y2 ');
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) ;
}
console.log(calculateDistance());
