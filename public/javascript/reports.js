async function selectCategoryById(event) {
    event.preventDefault();

    const categoryId = document.querySelector('.expense-category-form option:checked').value;
    const sessionUserId = document.querySelector('#user_id').value;
    let getNewTransactionElement = document.querySelector('.select-new-transaction');
    let expensesData = '';
    console.log(categoryId);
    console.log(sessionUserId);

    fetch("/api/expenses")
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    console.log("This is a success", data);
                    for (var i = 0; i < data.length; i++) {
                        let expenseUserId = data[i].user_id;
                        let expenseCategoryId = data[i].category_id;
                        console.log(data[i].name)
                        console.log(data[i].user_id)
                        if (expenseUserId == sessionUserId && expenseCategoryId == categoryId) {
                            expensesData +=
                                `
                            <p
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-500 dark:placeholder-gray-400">
                                ${data[i].name}<span>$${data[i].value}</span></p>
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


