document.addEventListener('DOMContentLoaded', GetEmail(), false);

function MessageSent(){
    event.preventDefault();
    //Message Box is empty
    document.getElementById('MessageInput').value = '';
    //Small Alert
    var confirm_message = document.getElementById('MessageSentAlert');
    confirm_message.classList.remove('d-none');
}
function GetEmail(){
    //Gets the email that user used to log/sign in
    var check_login = localStorage.getItem('loggedIn');
    if (check_login==="true"){
        var _email = localStorage.getItem('email');
        document.getElementById('EmailAddressInput').value = _email || '';
    }
    //if not then email input remains blank
}