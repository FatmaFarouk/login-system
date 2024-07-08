var user = []
user = JSON.parse(localStorage.getItem('user'))

var signInEmail = document.getElementById('signInEmail')
var signInPassword = document.getElementById('signInPassword')

document.getElementById('login').addEventListener('click', function() {
    if(signInEmail.value == '' || signInPassword.value == '') {
        return false
    }
    else {
        checkUser()
    }
})

function checkUser() {
    for (var i = 0 ; i < user.length ; i++) {
        if(signInEmail.value == user[i].email && signInEmail.value == user[i].password) {
            var x = user[i].name
            localStorage.setItem(userName, x)
            location.href = "../../home/home.html"
            break 
        }
    }
}