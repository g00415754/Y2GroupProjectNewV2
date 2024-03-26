function validate(){
    if(checkFirstName() && 
    checkEmail() && checkTextArea()){
        return true;
    }else{
        return false;
    }
    /*
    checkUsername();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPw();
    checkConfirmPw();
    */
}




function checkFirstName(){
    let x = document.getElementById("fn");
    let y = x.value.length;

    if(y == 0){
        alert("First name cannot be left blank.");
        return false;
    }else{
        return true;
    }
}

function checkEmail(){
    let x = document.getElementById("emailAddr");
    let y = x.value.indexOf("@");  //checks string value for @ and returns location or -1 if not found
    let z = x.value.indexOf(".");
    //alert(y + " " + z);

    if(y == -1 || z == -1){
        alert("Email address must include @ symbol and a dot.")
        return false;
    }else{
        return true;
    }
}
function checkTextArea(){
    let x = document.getElementById("textar");
    let y = x.value.length;

    if(y == 0){
        alert("Message cannot be left blank.");
        return false;
    }else{
        return true;
    }
}