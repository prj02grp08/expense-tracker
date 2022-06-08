async function selectCategoryById(event) {
    event.preventDefault();

    const categoryId = document.querySelector('.expense-category-form option:checked').value;
    const userId = document.querySelector('#user_id').value;
    console.log(categoryId);
    console.log(userId);

    fetch("/api/expenses")
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    console.log("This is a success",data);
                    const expenseUserId = data[0].user_id;
                    console.log(expenseUserId);
                    // userId 
                    


                    // pass response to DOM function
                    // displayPlants(data);
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


