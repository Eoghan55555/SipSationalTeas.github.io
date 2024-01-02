document.addEventListener('DOMContentLoaded', checkForSignIn, false);

function checkForSignIn() {
    //Check to see if user is signed in or not
    var loggedIn = localStorage.getItem('loggedIn');
    var signInLink = document.getElementById('signInLink');
    //Gets the sign in link in the nav
    if (loggedIn==='true'){
        //If the user log in sign in link text is now logged out
        signInLink.innerHTML = 'Log Out';
    }
    else{
        //If not the text stays/changes to sign in
        signInLink.innerHTML = 'Sign In';
    }
}
function SignOut(){
    //Varaible that confirms if user is or not signed in
    var loggedIn = localStorage.getItem('loggedIn');
    //if true user is then signed out
    if (loggedIn==='true'){
        //User is now recognised as logged out
        localStorage.setItem('loggedIn',false);
        localStorage.setItem('sampleLogin',false);
        //Saved Data for Check Out is removed
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('fname');
        localStorage.removeItem('lname');
        localStorage.removeItem('address1');
        localStorage.removeItem('address2');
        localStorage.removeItem('town');
        localStorage.removeItem('eircode');
        localStorage.removeItem('county');
    }
    
}
