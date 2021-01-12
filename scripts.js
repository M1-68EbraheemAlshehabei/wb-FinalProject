function validation(){
    let username = document.getElementById("username").value;
    let usermessage = document.getElementById("usermessage").value;
    let error_message = document.getElementById("error_message");
    let text;

    error_message.style.padding = "15px";

    if(username.length <4){
        text ="Please Enter Vaild Name";
        error_message.innerHTML = text;
        return false;
    }

    if(usermessage.length <= 120){
        text ="Please Enter More Than 120 characters";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully")
    return false;
}