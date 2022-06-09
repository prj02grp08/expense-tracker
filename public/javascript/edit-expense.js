function openModal(category_id, expenseValue, expenseName ) {

  const categoryId = category_id
  // const expensesValue = expenseValue
  // const expensesName = expenseName

  console.log(categoryId, )
  // Get the modal
  var modal = document.getElementById("update-expense");
  modal.style.display = "block";

  document.getElementById("update-expense-name").value = expenseName
  document.getElementById("update-expense-value").value = expenseValue

}

function cancelModal() {
  // Get the modal
  var modal = document.getElementById("update-expense");
  modal.style.display = "none";
}

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('p[name="expense-title"]').value.trim();
  const test = document.querySelector('.expense-title option:checked').value
  const test2 = document.querySelector('.expense-title').textContent;

  console.log("this is a test", test)
  console.log("this is a test2", test2)
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(id)

  const response = await fetch(`/api/expenses/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}


document.querySelector('#edit-btn').addEventListener('click', openModal);
document.querySelector('.update-expense-form').addEventListener('submit', editFormHandler);
