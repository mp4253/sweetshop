
function check(){

    const passwordInput = document.getElementById('pass_word');

    const checkbox = document.getElementById('checking_checkbox');

    if(checkbox.checked){
        passwordInput.type = "text";
    }
    else{
        passwordInput.type = "password";
    }


}


let typingTimer;
const typingDelay = 500;

function spinning() {
    let loader = document.getElementById("loader");
    let password = document.getElementById("pass_word");

    loader.style.opacity = "1";

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
        loader.style.opacity = "0";
    }, typingDelay);
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", login);
});

function login(event) {

    event.preventDefault();

    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;

    if (username === "meet" && password === "1234") {
        alert("Login successfully.");
        setTimeout(function(){
            window.location.href = "./home.html";
        }, 1000);
    } else {
        alert("Login failed");
    }
}
