
const m = new Date();
let month = m.getMonth()+1;
const y = new Date();
let year = y.getFullYear();


function checkName(){
    let name = document.getElementById("nname").value;
    sessionStorage.Name=name;
}
document.getElementById("order_con_name").innerHTML = sessionStorage.Name;

function checkEmail(){
    let x = document.getElementById("email").value;
    let y = x.value.indexOf("@");
    let z = x.value.indexOf(".");

    if(y == -1 || z == -1){
        alert("Invalid Email Address");
        return false
    }else{
        let email = x.value;
        sessionStorage.Email=email;
        return true
    }
    
}

function checkCity(){
    let city = document.getElementById("city").value;
    sessionStorage.City=city;
}
document.getElementById("order_con_city").innerHTML = sessionStorage.City;

function checkAddress(){
    let address = document.getElementById("address").value;
    sessionStorage.Address=address;
}
document.getElementById("order_con_address").innerHTML = sessionStorage.Address;

function checkZIP(){
    let zip = document.getElementById("zip").value;
    if(zip.length != 7){
        alert("Invalid ZIP/EIR code");
        return false
    }else{
        sessionStorage.ZIP=zip;
        return true;
    }   
}
document.getElementById("order_con_zip").innerHTML = sessionStorage.ZIP;

function checkCountry(){
    let country = document.getElementById("country").value;
    sessionStorage.Country=country;
}
document.getElementById("order_con_country").innerHTML = sessionStorage.Country;

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