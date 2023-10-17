const readlineSync = require('readline-sync');
const calculateBalance = () => {
    const incomes = readlineSync.question('Введите перечень доходов (разделяя элементы запятой): ');
    const expenses = readlineSync.question('Введите перечень расходов (разделяя элементы запятой): ');
    const incomeArray = incomes.split(',').map(Number);
    const expenseArray = expenses.split(',').map(Number);
    const totalIncome = incomeArray.reduce((sum, income) => sum + income, 0);
    const totalExpense = expenseArray.reduce((sum, expense) => sum + expense, 0);
    const balance = totalIncome - totalExpense;
    return balance;
}
console.log('Баланс: ', calculateBalance());