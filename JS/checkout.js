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

<<<<<<< HEAD
function Validate(){
    //Billing Validation//
    let name = document.getElementById("nname").value;
    if(name.length == 0){
        message += "Please enter Name for billing\n"
        invalid = true;
    }else{
        sessionStorage.Name=name;
    }
    

    let email = document.getElementById("email").value;
    if(email.indexOf(".") == -1 || email.indexOf("@") == -1){
        message += "Invalid Email Address for billing\n"
        invalid = true;
=======

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
>>>>>>> parent of baebfcf (updating validation on checkout)
    }else{
        let email = x.value;
        sessionStorage.Email=email;
<<<<<<< HEAD
    }

    let city = document.getElementById("city").value;
    if(city.length == 0){
        message += "Please enter City for billing\n"
        invalid = true;
    }else{
        sessionStorage.City=city;
=======
        return true
>>>>>>> parent of baebfcf (updating validation on checkout)
    }
    
}

<<<<<<< HEAD
    let address = document.getElementById("address").value
    if(address.length == 0){
        message += "Please enter Address for billing\n"
        invalid = true;
    }else{
        sessionStorage.Address=address;
    }
=======
function checkCity(){
    let city = document.getElementById("city").value;
    sessionStorage.City=city;
}
document.getElementById("order_con_city").innerHTML = sessionStorage.City;
>>>>>>> parent of baebfcf (updating validation on checkout)

function checkAddress(){
    let address = document.getElementById("address").value;
    sessionStorage.Address=address;
}
document.getElementById("order_con_address").innerHTML = sessionStorage.Address;

function checkZIP(){
    let zip = document.getElementById("zip").value;
<<<<<<< HEAD
    if(zip.length !=7){
        message += "Invalid ZIP code for billing\n"
        invalid = true;
=======
    if(zip.length != 7){
        alert("Invalid ZIP/EIR code");
        return false
>>>>>>> parent of baebfcf (updating validation on checkout)
    }else{
        sessionStorage.ZIP=zip;
        return true;
    }   
}
document.getElementById("order_con_zip").innerHTML = sessionStorage.ZIP;

function checkCountry(){
    let country = document.getElementById("country").value;
<<<<<<< HEAD
    if(country.length == 0){
        message += "Please enter Country for billing\n"
        invalid = true;
    }else{
        sessionStorage.Country=country;
    }

    //Card Validation//

    let cname = document.getElementById("cname").value
    if(cname.length == 0){
        message += "Please enter Name on card\n"
        invalid = true;
    }else{
        sessionStorage.cName=cname;
    }

    let ccnum = document.getElementById("ccnum").value
    if(ccnum.length == 0){
        message += "Please enter number on card\n"
        invalid = true;
    }else if(ccnum.length != 12){
        message += "Invalid Card Number\n"
        invalid = true;
    }else{
        
    }

    let expmonth = document.getElementById("expmonth").value
    let expyear = document.getElementById("expyear").value
    if(expyear > year){
        sessionStorage.Exp=expmonth;
    }else if(expyear < year){
        message += "Card Expired\n"
        invalid = true;
    }else{
        if(expmonth <= month){
            message += "Card Expired\n"
            invalid = true;
        }else{
            sessionStorage.Exp=expyear;
        }
    }

    let cvv = document.getElementById("cvv").value
    if(cvv.length != 3){
        message += "Invalid CVV number\n"
        invalid = true;
=======
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
>>>>>>> parent of baebfcf (updating validation on checkout)
    }else{
    }

    //Shipping Validation//

    let sname = document.getElementById("sname").value;
    if(sname.length == 0){
        message += "Please enter Name for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sName=sname;
    }
    document.getElementById("order_con_name").innerHTML = sessionStorage.sName;

    let semail = document.getElementById("semail").value;
    if(semail.indexOf(".") == -1 || semail.indexOf("@") == -1){
        message += "Invalid Email Address for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sEmail=semail;
    }

    let scity = document.getElementById("scity").value;
    if(scity.length == 0){
        message += "Please enter City for shippinh\n"
        invalid = true;
    }else{
        sessionStorage.sCity=scity;
    }
    document.getElementById("order_con_name").innerHTML = sessionStorage.sCity;
    

    let saddress = document.getElementById("saddress").value
    if(saddress.length == 0){
        message += "Please enter Address for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sAddress=saddress;
    }
    document.getElementById("order_con_name").innerHTML = sessionStorage.sAddress;

    let szip = document.getElementById("szip").value;
    if(szip.length !=7){
        message += "Invalid ZIP code for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sZIP=szip;
    }
    document.getElementById("order_con_name").innerHTML = sessionStorage.sZIP;

    let scountry = document.getElementById("scountry").value;
    if(scountry.length == 0){
        message += "Please enter Country for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sCountry=scountry;
    }
    document.getElementById("order_con_name").innerHTML = sessionStorage.sCountry;


    if(invalid){
        alert(message);
        message = "";
        return false;
    }else{
        return true;
    }
    
}

<<<<<<< HEAD
=======
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
>>>>>>> parent of baebfcf (updating validation on checkout)
