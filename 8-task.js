const readlineSync = require('readline-sync');
function calculateBalance(incomes, expenses) {
    const incomeArray = incomes.split(',').map(Number);
    const expenseArray = expenses.split(',').map(Number);
    const totalIncome = incomeArray.reduce((acc, income) => acc + income, 0);
    const totalExpense = expenseArray.reduce((acc, expense) => acc + expense, 0);
    const balance = totalIncome - totalExpense;
    return balance;
}
const userIncomes = readlineSync.question('Введите перечень доходов (разделяя элементы запятой): ');
const userExpenses = readlineSync.question('Введите перечень расходов (разделяя элементы запятой): ');
const result = calculateBalance(userIncomes, userExpenses);
console.log('Баланс: ', result);