document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const errorDiv = document.getElementById("error");
  
    loginForm.addEventListener("submit", function (event) {
      let errors = [];
      const passwordInput = document.getElementById("password").value; // Move this inside the listener
  
      // Email validation
      if (!emailInput.value.includes("@")) {
        errors.push("Please enter a valid email.");
      }
      // Password validation
      if (passwordInput.length < 6) {
        errors.push("Password must be at least 6 characters.");
      }
  
      if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        errorDiv.innerHTML = errors.join("<br>");
      }
    });
  });
  