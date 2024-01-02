function SignIn() {
    //Variables for sign in form
    var email = document.getElementById('EmailAddressInput').value;
    var password = document.getElementById('PasswordInput').value;
    //Sample Info that allows for easy sign in
    if (email === "johnD@gmail.com" && password === "Password123") {
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('sampleLogin',true);
        localStorage.setItem('email',email);
        const confirmCheckOut = localStorage.getItem('checkOutAttempt');
        //If user wanted to go to checkout before signing in they are brought to the the checkout.html
        if (confirmCheckOut==="true"){
            window.location.href = 'checkout.html';
            localStorage.setItem('checkOutAttempt',false);
        }
        //If not then the user is brought to the home page
        else{
            window.location.href = 'index.html';
        }
      
    } else {
        //If data for signing in is inputted incorrectly
        localStorage.setItem('loggedIn', false);
        var show_error = document.getElementById('login_Error');
        show_error.classList.remove('d-none');
    }
    event.preventDefault();
}

function togglePassword() {
    //Gets the password
    var passwordInput = document.getElementById("PasswordInput");
    //Shows the password by changing the type to text
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        //Then changes the type to password to hide it again
        passwordInput.type = "password";
    }
    
}
