captcha =  document.getElementById("captcha");
refreshButton = document.getElementById("refreshButton");
submitButton = document.getElementById("submitButton");
inputBox = document.getElementById("inputBox");
inputBox.value = ""

var a = Math.floor(Math.random() * 20) + 1;
var b = Math.floor(Math.random() * 10) + 1;
var op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
console.log(eval(a + op + b))

captcha.innerText = `${a} ${op} ${b}`

function verify(a, b, op) {
    if (eval(a + op + b) == inputBox.value){
        console.log("pass")
    }
    else {
        alert("WRONG CAPTCHA!")
        location.reload()
    }
}

refreshButton.onclick =  function() {location.reload()}
submitButton.onclick =  function() {verify(a, b, op)}