document.querySelector("form").addEventListener("submit", signUpFun)


var userData = JSON.parse(localStorage.getItem("userCreds")) || [];

function signUpFun() {
    event.preventDefault();
    window.location.reload();
    var userObj = {
        name: document.querySelector("#name").value,
        password: document.querySelector("#pass").value,
        userName: document.querySelector("#user").value,

    };

    userData.push(userObj);
    localStorage.setItem("userCreds", JSON.stringify(userData))
}