
let loginformEl = document.getElementById('loginform');


let usernameEl = document.getElementById('username');
let userErrMsgEl = document.getElementById('userErrMsg')

let passwordEl = document.getElementById('password');
let passwordErrMsgEl = document.getElementById("passwordErrMsg")

let emailEl = document.getElementById('email');
let emailErrMsgEl = document.getElementById('emailErrMsg')

let mitsubBtnEl = document.getElementById('mitsubBtn');
let error_massage = document.getElementById('error_massage');


function validatePassword(){
    const password = passwordEl.value.trim()

    if(password ===""){
        passwordErrMsgEl.textContent = "Enter the password"
        return false
    }
    else if (password.length <6){
        passwordErrMsgEl.textContent = "password must be a least 6 characters."
        return false
    }
    else{
        passwordErrMsgEl.textContent = ""
        return true
    }
    

}

function validateEmail(){
    const email = emailEl.value.trim()

    if (email===""){
        emailErrMsgEl.textContent = "Enter the email."
        return false
    }
    else if (!/^\S+@\S+\.\S+$/.test(email)){
        emailErrMsgEl.textContent = "Enter a vaild email."
    }
    else{
        emailErrMsgEl.textContent =""
    }
}
function validateUsername(){
    const username = username.value.trim();

    if (username===""){
        userErrMsgEl.textContent = "Enter the username."
    }
    else {
        userErrMsgEl.textContent = ""
    }
}
submitBtnEl.addEventListener("click", function(event){

    if (validateEmail() && validatePassword() && validateUsername()){
        error_massage.textContent = "Login Successfull."
    }
    else{
        error_massage.textContent = "Login Not SuccessFull."
    }

})