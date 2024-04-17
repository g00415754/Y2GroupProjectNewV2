const m = new Date();
let month = m.getMonth()+1;
const y = new Date();
let year = y.getFullYear();
let message = ""
let invalid = false;

function Validate(){
    //Billing Validation//
    let name = document.getElementById("nname").value;
    if(name.length == 0){
        message += "Please enter Name for billing\n"
        invalid = true;
    }else{
        sessionStorage.Name=name;
    }
    document.getElementById("order_con_name").innerHTML = sessionStorage.Name;
    

    let email = document.getElementById("email").value;
    if(email.indexOf(".") == -1 || email.indexOf("@") == -1){
        message += "Invalid Email Address for billing\n"
        invalid = true;
    }else{
        sessionStorage.Email=email;
    }

    let city = document.getElementById("city").value;
    if(city.length == 0){
        message += "Please enter City for billing\n"
        invalid = true;
    }else{
        sessionStorage.City=city;
    }
    document.getElementById("order_con_city").innerHTML = sessionStorage.City;
    

    let address = document.getElementById("address").value
    if(address.length == 0){
        message += "Please enter Address for billing\n"
        invalid = true;
    }else{
        sessionStorage.Address=address;
    }
    document.getElementById("order_con_address").innerHTML = sessionStorage.Address;

    let zip = document.getElementById("zip").value;
    if(zip.length !=7){
        message += "Invalid ZIP code for billing\n"
        invalid = true;
    }else{
        sessionStorage.ZIP=zip;
    }
    document.getElementById("order_con_zip").innerHTML = sessionStorage.ZIP;

    let country = document.getElementById("country").value;
    if(country.length == 0){
        message += "Please enter Country for billing\n"
        invalid = true;
    }else{
        sessionStorage.Country=country;
    }

    document.getElementById("order_con_country").innerHTML = sessionStorage.Country;

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
    

    let saddress = document.getElementById("saddress").value
    if(saddress.length == 0){
        message += "Please enter Address for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sAddress=saddress;
    }

    let szip = document.getElementById("szip").value;
    if(szip.length !=7){
        message += "Invalid ZIP code for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sZIP=szip;
    }

    let scountry = document.getElementById("scountry").value;
    if(scountry.length == 0){
        message += "Please enter Country for shipping\n"
        invalid = true;
    }else{
        sessionStorage.sCountry=scountry;
    }


    if(invalid){
        alert(message);
        message = "";
        return false;
    }else{
        window.location.href = "order-confirmation.html";
        return true;
    }
    
}

