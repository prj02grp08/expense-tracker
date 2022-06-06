async function addExpenses() {
    const expenseName = document.querySelector('#new-expense').value.trim();
    const expenseValue = document.querySelector('#new-expense-value').value.trim();
    const user_id = document.querySelector('#user_id').value;
    const category_id = document.querySelector('#select-category').value;

    console.log("this", expenseName, expenseValue, user_id, category_id);
    // const expenseName = document.querySelector('#new-expense').value.trim();

    const response = await fetch('/api/expenses', {
        method: 'POST',
        body: JSON.stringify({
            name: expenseName,
            value: expenseValue,
            user_id: user_id,
            category_id: category_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        console.log(response)
    }
}
// window.onload = getCategory();
document.querySelector('.expense-form').addEventListener('submit', addExpenses);

