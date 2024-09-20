document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate form fields
    let isValid = true;


//Retrieves and trims the value of the input field with ID name.
    const name = document.getElementById('name').value.trim();
 //Retrieves and trims the value of the input field with ID email   
    const email = document.getElementById('email').value.trim();
//Retrieves and trims the value of the input field with ID message.    
    const message = document.getElementById('message').value.trim();


    // Checks if the name field is empty and shows an error message if it is

    if (name === '') {
        showError('name', 'Name is required.');
        isValid = false;
    }

    //Checks if the email field is empty and if not, validates the email format.

    if (email === '') {
        showError('email', 'Email is required.');
    } else if (!validateEmail(email)) {
        showError('email', 'Email is not valid.');
        isValid = false;
    }
    // Checks if the subject field is empty and shows an error message if it is.
    if(subject === ''){
        showError('subject','Subject is required');
        isValid = false;
    }
    // Checks if the message field is empty and shows an error message if it is.
    if (message === '') {
        showError('message', 'Message is required.');
        isValid = false;
    }
    //Displays an alert if all form fields are valid.
    if (isValid) {
        alert('Form submitted successfully!');
        
    }
});
//Defines a function to display an error message next to a specified form field.
function showError(fieldId, message) {
    document.getElementById(`${fieldId}Error`).innerText = message;
}


//Defines a function to clear all error messages from the form.
function clearErrors() {
    //Selects all elements with the class error and clears their inner text.
    document.querySelectorAll('.error').forEach(error => error.innerText = '');
}

//Defines a function to validate the format of an email address.
function validateEmail(email) {
    // Creates a regular expression to match a valid email format
    const symbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Tests the email address against the regular expression.
    return symbols.test(email);
}