document.getElementById('login-submit').addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("user-password");
    const userPasssword = passwordField.value;
    if (userEmail == '01755114282' && userPasssword == '01755114282') {
        window.location.href = 'banking.html';
    } else {
        alert('thik Password de')
    }
})
