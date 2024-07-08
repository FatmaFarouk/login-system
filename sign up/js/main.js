var signUpName = document.getElementById('signUpName')
var signUpEmail = document.getElementById('signUpEmail')
var signUpPassword = document.getElementById('signUpPassword')
var user = []

if(localStorage.getItem('user') == null) {
    arr = []
}
else {
    arr = JSON.parse(localStorage.getItem('user'))
}

function add() {
    if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        return false
    }
    else { 
        // return true
        var obj = {
            name : signUpName.value,
            email : signUpEmail.value,
            password : signUpPassword.value
        }
        user.push(obj)
        location.href = "../../login/index.html"
        localStorage.setItem('user', JSON.stringify(user))
    }
}