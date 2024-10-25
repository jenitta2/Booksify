  document.getElementById('registerForm').addEventListener('submit', function (event) {
    let valid = true;
  
    // Clear any existing error messages
    document.querySelectorAll('.error').forEach((span) => span.textContent = '');
  
    // Validate Name (non-empty, at least 2 characters)
    const name = document.getElementById('name').value;
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
      valid = false;
    }
  
    // Validate City (non-empty)
    const city = document.getElementById('city').value;
    if (city.trim() === '') {
      document.getElementById('cityError').textContent = 'City is required';
      valid = false;
    }
  
    // Validate State (non-empty)
    const state = document.getElementById('state').value;
    if (state.trim() === '') {
      document.getElementById('stateError').textContent = 'State is required';
      valid = false;
    }
  
    // Validate Email (basic email format)
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email';
      valid = false;
    }
    const numberInput=document.getElementById('mobile').value;
    if(numberInput.length<5){
      document.getElementById('numberError').textContent = 'Number must be at 10 characters';
      valid = false;
    }
  
    // Validate Password (minimum length 6 characters)
    const password = document.getElementById('password').value;
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
      valid = false;
    }
  
    // If any validation fails, prevent form submission
    if (!valid) {
      event.preventDefault();
    }
  });