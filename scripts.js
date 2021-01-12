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

// Function for read more the the kuwait nature page. will allow the user to click the button to read more
function ReadMoreFunction() {

    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  // the loading pag procces function

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}
