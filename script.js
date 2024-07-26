document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Form and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 2: Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Step 3: Retrieve User Inputs and Trim
        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // Step 4: Initialize Validation Variables
        let isValid = true;
        let messages = [];

        // Step 5: Username Validation
        if (usernameInput.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 6: Email Validation
        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Step 7: Password Validation
        if (passwordInput.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 8: Display Feedback
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    });
});