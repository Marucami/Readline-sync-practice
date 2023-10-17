const readlineSync = require('readline-sync');
function calculateAverageGrade() {
    const grades = readlineSync.question('Введите свои оценки(разделяя элементы запятой): ')
    const gradesArr = grades.split(",");
    let sum = 0;
    let count = 0;
    for (let i = 0; i < gradesArr.length; i++) {
        const grade = Number(gradesArr[i]);
    if (grade >= 1 && grade <= 10) {
        sum += grade;
        count++;}
    }
    if (count === 0) {
        return 0;
        }
    const average = sum / count;
    return average.toFixed(2);
}
console.log(calculateAverageGrade());