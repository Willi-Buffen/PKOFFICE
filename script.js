// Smooth scroll to section
function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent successfully!');
            form.reset(); // Reset the form after successful submission
        } else {
            alert('Oops! There was a problem with your submission.');
        }
    }).catch(error => {
        alert('Oops! There was an error connecting to the server.');
    });
});

// Modal functionality
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Set your fixed credentials here
    const validUsername = 'admin'; // Replace with your username
    const validPassword = 'password123'; // Replace with your password

    // Check credentials
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        modal.style.display = 'none';
        // Optionally, you could redirect or reveal the main content here
    } else {
        alert('Invalid username or password!');
    }
});
