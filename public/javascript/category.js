async function addCategory(event) {
    event.preventDefault();

    const title = document.querySelector('#new-category').value.trim();
    console.log(title);

    const response = await fetch('/api/category', {
        method: 'POST',
        body: JSON.stringify({
            name: title
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.category-form').addEventListener('submit', addCategory);
