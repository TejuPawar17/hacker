function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password are required");
        return false;
    }

    // You can add more validation rules here if needed

    // If all validations pass, submit the form
    alert("Form submitted successfully");
    // Optionally, you can submit the form programmatically
    // document.getElementById("loginForm").submit();
}
