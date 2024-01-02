//Gets the password and confirm password inputs
var passwordInput = document.getElementById('PasswordInput');
var confirmPasswordInput = document.getElementById('ConfirmPasswordInput');

//
passwordInput.addEventListener('input', function () {
  updateBorderColor();
});

//Event Listener for confirm password an an input happens
confirmPasswordInput.addEventListener('input', function () {
  updateBorderColor();
});

// 
function updateBorderColor() {
    //Gets the password values
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    //If passwords match and both are not null
    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
      //Removes red border
      confirmPasswordInput.classList.remove('password_no_match');
      //Adds Green Border
      confirmPasswordInput.classList.add('password_match');

    } else {
      //Removes Green Border
      confirmPasswordInput.classList.remove('password_match');
      //Adds Red Border
      confirmPasswordInput.classList.add('password_no_match');

    }
  }

function togglePassword() {
    //Same function that was from the log in page 
    var passwordInput = document.getElementById("PasswordInput");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
    
}
//List for dropdown
const countyNames = [
    "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare",
    "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath",
    "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath",
    "Wexford", "Wicklow", "Derry", "Antrim", "Down", "Armagh", "Tyrone", "Fermanagh"
  ];
  //Sorts the counties in alphabetical order
  countyNames.sort();
  // Get the select element
  const countySelect = document.getElementById('CountyInput');

  // Populate the options
  countyNames.forEach(county => {
    const option = document.createElement('option');
    option.textContent = county;
    option.value = county;
    countySelect.appendChild(option);
  });
  function SignIn(event) {
    
    //Email
    var email = document.getElementById('EmailAddressInput').value;
    localStorage.setItem('email', email);
    //Password
    var password = document.getElementById('PasswordInput').value;
    localStorage.setItem('password', password);
    //First Name
    var f_name = document.getElementById('FirstNameInput').value;
    localStorage.setItem('fname', f_name);
    //Last Name
    var l_name = document.getElementById('LastNameInput').value;
    localStorage.setItem('lname', l_name);
    //Address Line 1
    var address_line1 = document.getElementById('AddressLine1Input').value;
    localStorage.setItem('address1', address_line1);
    //Address Line 2
    var address_line2 = document.getElementById('AddressLine2Input').value;
    localStorage.setItem('address2', address_line2);
    //Town
    var town = document.getElementById('TownInput').value;
    localStorage.setItem('town', town);
    //Eircode
    var eircode = document.getElementById('EircodeInput').value;
    localStorage.setItem('eircode', eircode);
    //County
    var county = document.getElementById('CountyInput').value;
    localStorage.setItem('county', county);
    //Confirm Password
    var confirmPassword = document.getElementById('ConfirmPasswordInput').value;
    if(password !== confirmPassword){
      //if passwords do not match then it prevents the user from creating an account
      event.preventDefault();
    }
    else{
      //user is now reconised as signing in
      localStorage.setItem('loggedIn', true);
      //from log page, if user wanted to go to checkout they will be returned there
      const confirmCheckOut = localStorage.getItem('checkOutAttempt');
      if (confirmCheckOut==="true"){
        window.location.href = 'checkout.html';
      }
      else{
        //if not then they will be brought to the home page
        window.location.href = 'index.html';
      }
      
    }
}