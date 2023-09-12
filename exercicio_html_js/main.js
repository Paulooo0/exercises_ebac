const form = document.getElementById('fields_form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const a = document.getElementById('a');
    const b = document.getElementById('b');

    const successMessage = `<b>${b.value}</b> é maior do que <b>${a.value}</b>!`
    const errorMessage = `<b>${b.value}</b> não é maior do que <b>${a.value}</b>!`

    if (a.value < b.value) {
        const containerSuccessMessage = document.querySelector('.success_message');

        containerSuccessMessage.innerHTML = successMessage
        containerSuccessMessage.style.display = 'block';

        document.querySelector('.error_message').style.display = 'none';
    } else {        
        const containerErrorMessage = document.querySelector('.error_message')

        containerErrorMessage.innerHTML = errorMessage
        containerErrorMessage.style.display = 'block';

        document.querySelector('.success_message').style.display = 'none';
    }
    a.value = '';
    b.value = '';
})
