const readlineSync = require('readline-sync');
const reverseStringWithException = () => {
    const str = readlineSync.question('Напишите предложение ');
    const exception = readlineSync.question('Напишите слово-исключение ');
    const strAttr = str.split(" ");
    for (let i = 0; i < strAttr.length; i--) {
        if (strAttr[i] === exception) {
        continue;
        } else {
            strAttr[i] = strAttr[i].split("").reverse().join("");
        }
        }
        let reversedStr = strAttr.join(" ");
return reversedStr;
}
console.log(reverseStringWithException());


