//............ The start code of validating the user input ..............
function validation(){
  //declaring a veriables inside a function and get the info from html by id
    let username = document.getElementById("username").value;
    let usermessage = document.getElementById("usermessage").value;
    let error_message = document.getElementById("error_message");
    let text;
  // error messsage when the users do not follow what we want them to write in the iinput_field
    error_message.style.padding = "15px";

  // condition for username box if the user insert less than 4 characters
    if(username.length <4){
        text ="Please Enter Vaild Name";
        error_message.innerHTML = text;
        return false;
    }
  // condition for usermessage box if the user insert less than or equal to 50 characters
    if(usermessage.length <= 50){
        text ="Please Enter More Than 50 characters";
        error_message.innerHTML = text;
        return false;
    }
// alert window letting the user that the input has been submitted
    alert("Submitted Successfully")
    return false;
}
//............ The End code of validating the user input ..............

// ...............start the code of the proccess to store the user input in the loacl storage...............................

let usersInfo = [];
// example {id: 3527, username: `Ebraheem`, useremail: `ibraheem.96@hotmail.com`, usermessgae: `hello world`}
const addInfo = (ev)=>{
  ev.preventDefault(); // to stop the form from submitting
  let Nameofuser = {
    id: Date.now(),
    username: document.getElementById(`username`).value,
    useremail: document.getElementById(`useremail`).value,
    usermessage: document.getElementById(`usermessage`).value,
  }
  usersInfo.push(Nameofuser);
  document.forms[0].reset(); //to clear the form for the next enties

  //for testing purposes only!!

  // console.warn(`added` , {usersInfo} );
  // let pre = document.querySelector(`#msg pre`);
  // pre.textContent = `\n` + JSON.stringify(usersInfo, `\t`, 2);

  //saving to loacalStorage
  localStorage.setItem(`UserInput-contact`, JSON.stringify(usersInfo) );
}
document.addEventListener(`DOMContentLoaded`, ()=>{
    document.getElementById(`btn`).addEventListener(`click`, addInfo);

});
//..............End of saving user input proccess.............................. 

// ...............start code of loading the page for the entire project...............................
  // the loading pag procces function
let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

// ...........button to open a link in the browers for differnts websites in the eco life page.............

function Link1() {
  window.open("https://www.unep.org/");
}

function Link2() {
  window.open("https://epa.org.kw/en-US/Home");
}
function Link3() {
  window.open("http://www.beatona.net/en");
}
function Link4() {
  window.open("https://www.ecovertfm-kw.com/");
}
function Link4() {
  window.open("http://ecolifesci.com/");
}

// ...................the survey form in the eco life page..................

let ul_1 = document.querySelector(".option1");
let ul_2 = document.querySelector(".option2");
let ul_3 = document.querySelector(".option3");
let ul_4 = document.querySelector(".option4");
let ul_5 = document.querySelector(".option5");

let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let q4 = document.querySelector(".q4");
let q5 = document.querySelector(".q5");

let survey = document.querySelector(".survey");
let end = document.querySelector(".end");

// first question
ul_1.addEventListener("click", function(){
  q1.style.display ="none";
  q2.style.display ="block";
});
// second question
ul_2.addEventListener("click", function(){
  q2.style.display ="none";
  q3.style.display ="block";
});
// third question
ul_3.addEventListener("click", function(){
  q3.style.display ="none";
  q4.style.display ="block";
});
// fourth question
ul_4.addEventListener("click", function(){
  q4.style.display ="none";
  q5.style.display ="block";
});

// display thank message
ul_5.addEventListener(`click`, function(){
  q5.style.display ="none";
  survey.style.display = "none";
  end.style.display ="block";
});

