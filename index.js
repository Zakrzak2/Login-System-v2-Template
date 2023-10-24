
var login = "ROOT"
var password = "ADMIN"

function check_login(){
    var T_LOGIN = document.getElementById('ILOGIN').value
    var T_PASSWORD = document.getElementById('IPASSWORD').value

    if(T_LOGIN == login){
        if(T_PASSWORD == password)
        {
            window.location = 'user.html'
        }
        else{
            console.log("ZLE HASLO")
            document.getElementById('ANP').innerHTML = "Wrong Password"
            document.getElementById('ANL').innerHTML = ""
        }
    }
    else{
        console.log("ZLY LOGIN")
        document.getElementById('ANP').innerHTML = ""
        document.getElementById('ANL').innerHTML = "Wrong Login"
    }
}