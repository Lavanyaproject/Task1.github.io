document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to a server or an email service
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form
    document.getElementById('contact-form').reset();
    alert('Thank you for your message!');
});