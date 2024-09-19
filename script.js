// Modal functionality
const modal = document.getElementById("loginModal");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); // Reference to main content

// Close modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Set your fixed credentials here
    const validUsername = 'V2lsbGk='; 
    const validPassword = 'V2lsbG9vQmVmZW4xMjM='; 

    // Check credentials
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        modal.style.display = 'none'; // Hide modal
        mainContent.style.display = 'block'; // Show the main content
    } else {
        alert('Invalid username or password!');
    }
});

// Show the login modal on page load
window.onload = function() {
    modal.style.display = "block"; // Show modal when the page loads
};

