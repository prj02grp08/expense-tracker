async function addExpenses() {
    // event.preventDefault();
    // console.log("this 2", categories);

    const expenseName = document.querySelector('#new-expense').value.trim();
    const expenseValue = document.querySelector('#new-expense-value').value.trim();
    const user_id = 1;
    const category_id = document.querySelector('#select-category').value.split(' ')[0];

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

