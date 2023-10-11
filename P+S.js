const readlineSync = require('readline-sync');
const calculateRectangleProperties = () => { 
    const width = readlineSync.question('Ширина ');
    const height = readlineSync.question('Высота '); 
    return `Периметр: ${2 * width + 2 * height} , Площадь: ${width * height}` ;
}
console.log(calculateRectangleProperties());

