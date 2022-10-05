// JAVASCRIPT FOR TOOGLE MENU
var navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

// JS FOR CONTACT FORM
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;
    if(name.length==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    nameError.innerHTML = 'Valid';
    return true; 
}
function validatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone.length==0){
        phoneError.innerHTML = 'Phone No is required';
        return false;
    }
    if(phone.length != 10){
        phoneError.innerHTML = 'Phone No should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits required';
        return false;
    }
    phoneError.innerHTML = 'Valid';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = 'Valid';
    return true;
}
function validateSubject(){
    var subject = document.getElementById('subject').value;
    if(subject.length==0){
        subjectError.innerHTML = 'Subject is required';
        return false;
    }
    subjectError.innerHTML = 'Valid';
    return true;
}
function validateMessage(){
    var message = document.getElementById('message').value;
    if(message.length==0){
        messageError.innerHTML = 'Message is required';
        return false;
    }
    messageError.innerHTML = 'Valid';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to Submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }

}

// JAVASCRIPT FOR LINKING GMAIL
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "0626skomal@gmail.com",
        Password : "password",
        To : '06komals@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value, 
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone No: " + document.getElementById("phone").value
                + "<br> Subject: " + document.getElementById("subject").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}