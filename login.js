document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Mock login validation
            if (username === 'user' && password === 'password') {
                alert('Login successful!');
                // Redirect to a different page or dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid username or password!');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const newUsername = document.getElementById('new-username').value;
            const email = document.getElementById('email').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Validate password match
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Mock signup validation
            alert('Account created successfully!');
            // Redirect to the login page
            window.location.href = 'index.html';
        });
    }
});
