async function selectCategoryById(event) {
    event.preventDefault();

    const categoryId = document.querySelector('.expense-category-form option:checked').value;
    const sessionUserId = document.querySelector('#user_id').value;
    let getNewTransactionElement = document.querySelector('.select-new-transaction');
    let expensesData = '';
    // console.log(categoryId);
    // console.log(sessionUserId);

    fetch("/api/expenses")
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    console.log("This is a success", data);
                    for (var i = 0; i < data.length; i++) {
                        let expenseUserId = data[i].user_id;
                        let expenseCategoryId = data[i].category_id;
                        if (expenseUserId == sessionUserId && expenseCategoryId == categoryId) {
                            expensesData +=
                                `
                            <p
                                class="expense-title bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-500 dark:placeholder-gray-400">
                                ${data[i].name}<span class="expense-value">$${data[i].value}</span></p>
                            <button type="button" id="edit-btn" onclick="openModal(${data[i].id}, ${data[i].category_id},${data[i].value},\'${data[i].name}\' )">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                    </path>
                                </svg>
                            </button>
                            <button type="button" id="delete-btn" onclick="openDeleteModal(${data[i].id}, ${data[i].category_id},${data[i].value},\'${data[i].name}\' )">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                    </path>
                                </svg>
                            </button>
                            `
                            // console.log(expensesData)

                        };

                    }
                    getNewTransactionElement.innerHTML = expensesData





                });
            }
            else {
                // if not successful, redirect to dashboard
                document.location.replace("./dashboard");
            }
        });
}

// document.querySelector('#edit-btn').addEventListener('click', openModal);

document.querySelector('.expense-category-form').addEventListener('submit', selectCategoryById);



// async function getSomething(event) {
//     event.preventDefault();

//     const category_id = document.querySelector('#category-id').value;
//     console.log(category_id);

//     // const response = await fetch('/api/category', {
//     //     method: 'post',
//     //     body: JSON.stringify({
//     //         name: title
//     //     }),
//     //     headers: { 'Content-Type': 'application/json' }
//     // }).then((response) => {
//     //     console.log("THIS IS RESPONSE",response)
//     // })

//     // if (response.ok) {
//     //     document.location.replace('/reports');
//     // } else {
//     //     alert(response.statusText);
//     // }

// }

// document.querySelector('.expense-category-form').addEventListener('onclick', getSomething);


