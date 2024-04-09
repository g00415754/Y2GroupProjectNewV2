function validate(){
    if(checkEmail() && 
    checkExp() && 
    checkCvv() && 
    checkSEmail ()){
        return true
    }else{
        return false
    }
}
const m = new Date();
let month = m.getMonth()+1;
const y = new Date();
let year = y.getFullYear();


function checkEmail(){
    let x = document.getElementById("email");
    let y = x.value.indexOf("@");
    let z = x.value.indexOf(".");

    if(y == -1 || z == -1){
        alert("Invalid Email Address");
        return false
    }else{
        return true
    }
}

function checkSEmail(){
    let x = document.getElementById("semail");
    let y = x.value.indexOf("@");
    let z = x.value.indexOf(".");

    if(y == -1 || z == -1){
        alert("Invalid Email Address");
        return false
    }else{
        return true
    }
}

function checkCvv(){
    let x = document.getElementById("cvv")
    let y = x.value.length;

    if(y != 3){
        alert("INVALID CVV")
        return false
    }else{
        return true
    }
}

function checkExp(){
    let x = document.getElementById("expmonth").value
    let y = document.getElementById("expyear").value
    if(y > year){
        return true
    }else if(y < year){
        alert("CARD EXPIRED")
        return false
    }else{
        if(x <= month){
            alert("CARD EXPIRED")
            return false
        }else{
            return true
        }
    }
}