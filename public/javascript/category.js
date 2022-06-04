async function addCategory(event) {
    event.preventDefault();

    const title = document.querySelector('#new-category').value.trim();
    console.log(title);

    const response = await fetch('/api/category', {
        method: 'POST',
        body: JSON.string({
            title
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log("This is the response", response)
    }

}

document.querySelector('category-form').addEventListener('submit', addCategory);
