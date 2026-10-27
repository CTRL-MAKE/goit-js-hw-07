
const loginForm = document.querySelector('.login-form');


const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email === '' || password === '') {
        alert(`All form fields must be filled in`);
        return;
    }

    console.log({ email, password });



    event.target.reset();    
}

loginForm.addEventListener('submit', handleSubmit);