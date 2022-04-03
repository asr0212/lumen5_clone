document.querySelector("form").addEventListener("submit", loginFun)

var regdUser = JSON.parse(localStorage.getItem("userCreds"));

// console.log(regdUser)

function loginFun() {
    event.preventDefault();
    var enterEmail = document.querySelector("#email").value;
    var enterPass = document.querySelector("#pass").value;
    // console.log(email, pass)
    var flag = false;
    for (var i = 0; i < regdUser.length; i++) {
        if (regdUser[i].userName == enterEmail && regdUser[i].password == enterPass) {

            // window.location.href = ;
            flag = true;
        }

    }
    if (flag == true) {
        alert("Login Sucess");
    } else {
        alert("Login Failed")
    }
}