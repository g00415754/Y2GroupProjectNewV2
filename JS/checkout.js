const m = new Date();
let month = m.getMonth()+1;
const y = new Date();
let year = y.getFullYear();
let message = ""
let invalid = false;

function validate(){
    let name = document.getElementById("nname").value;
    if(name == null){
        message += "Please Enter Your Name\n"
        invalid = true;
    }else{
        sessionStorage.Name=name;
    }
    

    let email = document.getElementById("email").value;
    if(email.indexOf(".") == -1 || email.indexOf("@") == -1){
        message += "Invalid Email Address\n"
        invalid = true;
    }else{
        sessionStorage.Email=email;
    }

    let city = document.getElementById("city").value;
    if(city = ""){
        message += "Please Enter City\n"
        invalid = true;
    }else{
        sessionStorage.City=city;
    }
    

    let address = document.getElementById("address").value
    if(address = ""){
        message += "Please Enter Address\n"
        invalid = true;
    }else{
        sessionStorage.Address=address;
    }

    let zip = document.getElementById("zip").value;
    if(zip.length !=7){
        message += "Invalid ZIP code\n"
        invalid = true;
    }else{
        sessionStorage.ZIP=zip;
    }

    let country = document.getElementById("country").value;
    if(country = ""){
        message += "Please Enter Country\n"
        invalid = true;
    }else{
        sessionStorage.Country=country;
    }

    let cname = document.getElementById("cname")
    if(cname = ""){
        message += "Please Enter Name on your Card\n"
        invalid = true;
    }else{
        sessionStorage.cName=cname;
    }

    let ccnum = document.getElementById("ccnum")
    if(ccnum = ""){
        message += "Please Enter Number on your Card\n"
        invalid = true;
    }else if(ccnum.length != 12){
        message += "Invalid Card Number\n"
        invalid = true;
    }else{
        sessionStorage.ccNum=ccnum;
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
    }else{}

}
if(invalid){
    alert("wrong")
}else{
}
    document.getElementById("order_con_name").innerHTML = sessionStorage.Name;

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
