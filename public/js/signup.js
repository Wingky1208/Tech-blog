const signupForm = document.querySelector(".signup-form");

const signupFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector("#username-signup");
    const passwordEl = document.querySelector("#password-signup");


    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to sign up');
    }

};



signupForm.addEventListener("submit", signupFormHandler);