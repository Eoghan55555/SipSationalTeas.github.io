const countyNames = [
    "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare",
    "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath",
    "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath",
    "Wexford", "Wicklow", "Derry", "Antrim", "Down", "Armagh", "Tyrone", "Fermanagh"
  ];
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
      // Function to set default values for form inputs
      function setDefaultValues() {
        //Check if sample log in has occured
        var sampleLogin = localStorage.getItem('sampleLogin');
        if (sampleLogin==="true"){
            checkforSampleLogin();
        }
        else{
            // Email
            var email = localStorage.getItem('email');
            document.getElementById('EmailAddressInput').value = email || '';

            // First Name
            var fName = localStorage.getItem('fname');
            document.getElementById('FirstNameInput').value = fName || '';

            // Last Name
            var lName = localStorage.getItem('lname');
            document.getElementById('LastNameInput').value = lName || '';

            // Address Line 1
            var address1 = localStorage.getItem('address1');
            document.getElementById('AddressLine1Input').value = address1 || '';

            // Address Line 2
            var address2 = localStorage.getItem('address2');
            document.getElementById('AddressLine2Input').value = address2 || '';

            // Town
            var town = localStorage.getItem('town');
            document.getElementById('TownInput').value = town || '';

            // Eircode
            var eircode = localStorage.getItem('eircode');
            document.getElementById('EircodeInput').value = eircode || '';

            // County
            var county = localStorage.getItem('county');
            document.getElementById('CountyInput').value = county || '';
        }
        
    }

    // Call the function to set default values on page load
    setDefaultValues();

    function checkforSampleLogin(){
        document.getElementById('EmailAddressInput').value = "johnD@gmail.com";
        document.getElementById('FirstNameInput').value = "John";
        document.getElementById('LastNameInput').value = "Doe";
        document.getElementById('AddressLine1Input').value = "Pearse Rd";
        document.getElementById('TownInput').value = "Cork";
        document.getElementById('EircodeInput').value = "T12 VN8P";
        document.getElementById('CountyInput').value = "Cork";
        
    }
    function confirmPurchase(event){

        event.preventDefault();
        //Alert to tell purchase has been successful
        alert("Purchase Successful!");
        //Basket list is removed after purchase
        localStorage.removeItem('basketItems');
        //User is then redirected to the index.html
        window.location.href='index.html';
    }