const readlineSync = require('readline-sync');
const countWords = () => {
const sentence = readlineSync.question('Напишите своё предложение ');
return sentence.split(' ').length;
}
console.log(countWords());