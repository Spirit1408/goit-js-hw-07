const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    } else {
        const formData = {
            email: email,
            password: password,
        };
        console.log(formData);
        form.reset();
    }
});
