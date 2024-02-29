let userFullName;
let userIdNumber;
let userDateofBirth;
let userEmail;
let username;
let userPassword;
let securityQuestion;
let answerSecurityQuestion;

function enviarFormulario(){
    
    userFullName = document.getElementById("user-fullname").value;
    userIdNumber = document.getElementById("user-id-number").value;
    userDateofBirth = document.getElementById("user-date-of-birth").value;
    userEmail = document.getElementById("user-email").value;
    username = document.getElementById("username").value;
    userPassword = document.getElementById("user-password").value;
    securityQuestion = document.getElementById("user-security-question").value;
    answerSecurityQuestion = document.getElementById("answer-security-question").value;
    
    window.location.href = "index.html";

    localStorage.setItem("userFullName", userFullName);
    localStorage.setItem( "userIdNumber" , userIdNumber );
    localStorage.setItem("userDateOfBirth", userDateofBirth);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("username", username);
    localStorage.setItem("userPassword", userPassword);
    localStorage.setItem("securityQuestion", securityQuestion);
    localStorage.setItem("answerSecurityQuestion", answerSecurityQuestion);
}

let loginUserName;
let loginUserPassword;

function validarAcceso() {
    let userFullName = localStorage.getItem("userFullName");
    let userIdNumber = localStorage.getItem("userIdNumber");
    let userDateofBirth = localStorage.getItem("userDateOfBirth");
    let  userEmail = localStorage.getItem("userEmail");
    let username = localStorage.getItem("username");
    let userPassword =  localStorage.getItem("userPassword");
    let  securityQuestion = localStorage.getItem("securityQuestion");
    let answerSecurityQuestion = localStorage.getItem("answerSecurityQuestion");
    loginUserName = document.getElementById('login-username').value;
    loginUserPassword = document.getElementById('login-password').value; 

    if(loginUserName ==  username && loginUserPassword == userPassword){
       alert("Access success!!");
       window.location.href = "homepage.html";
    } else {
        alert("Invalid Username or Password, please try again.");
    }
}