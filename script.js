// Modal functionality
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); // Reference to main content

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
    const validUsername = 'Willi'; // Replace with your username
    const validPassword = 'WilliBuffen123'; // Replace with your password

    // Check credentials
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        modal.style.display = 'none';
        mainContent.style.display = 'block'; // Show the main content
    } else {
        alert('Invalid username or password!');
    }
});
