function openDeleteModal(expenseId, category_id, expenseValue, expenseName) {

  const categoryId = category_id
  // const expensesValue = expenseValue
  // const expensesName = expenseName
  var expenseId = expenseId

  console.log("catedddd",categoryId, "exddddd", expenseId, user_id )
  // Get the modal
  var modal = document.getElementById("popup-modal");
  modal.style.display = "block";

  userId = document.getElementById("user_id").value;

  document.getElementById("update-expense-name").value = expenseName
  document.getElementById("update-expense-value").value = expenseValue
  document.getElementById("modal_delete_user_id").value = userId
  document.getElementById("modal_delete_expense_id").value = expenseId
  document.getElementById("modal_delete_category_id").value = categoryId

  
  return expenseId;

}

function cancelDeleteModal() {
  // Get the modal
  var modal = document.getElementById("popup-modal");
  modal.style.display = "none";

}

async function deleteExpenseId(event) {
  event.preventDefault();
  const title = document.getElementById("update-expense-name").value;
  const value = document.getElementById("update-expense-value").value;
  const userIdResponse = document.getElementById("modal_delete_user_id").value;
  const categoryIdResponse = document.getElementById("modal_delete_category_id").value;
  const expenseIdResponse = document.getElementById("modal_delete_expense_id").value;
  console.log("this is a new expense ",expenseIdResponse);
  
  const response = await fetch(`/api/expenses/${expenseIdResponse}`, {
    method: 'DELETE',
    // body: JSON.stringify({
    //   name: title,
    //   value
    // }),
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  });

  if (response.ok) {
    document.location.reload('/reports/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#delete-btn').addEventListener('click', openDeleteModal);
document.querySelector('#delete-expenseId').addEventListener('click', deleteExpenseId);
