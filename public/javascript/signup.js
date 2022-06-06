async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log('dddd:', first_name, last_name, email, password)

    if (first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log(response)
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
