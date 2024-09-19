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

