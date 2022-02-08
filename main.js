captcha =  document.getElementById("captcha");
refreshButton = document.getElementById("refreshButton");
submitButton = document.getElementById("submitButton");
inputBox = document.getElementById("inputBox");

inputBox.addEventListener("input", (event) => textchanged());
inputBox.value = ""

var passed = false;
var a = Math.floor(Math.random() * 20) + 1;
var b = Math.floor(Math.random() * 10) + 1;
var op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];

captcha.innerText = `${a} ${op} ${b}`

function verify(a, b, op) {
    if (eval(a + op + b) == inputBox.value){
        passed =  true;
    } else {
        setTimeout(function(){
            alert("WRONG CAPTCHA!")
        }, 1000);
        setTimeout(function(){
            inputBox.value = ""
        }, 200);
    }
}

function textchanged() {
    verify(a, b, op)
}

refreshButton.onclick =  function() {location.reload()}
submitButton.onclick =  function() {
    verify(a, b, op)
    if (passed == true) {
        alert("Congratulations, you have passed this captcha! :)")
        window.location.href = "https://www.youtube.com/watch?v=nUKgeAKTaXM";
    }
}