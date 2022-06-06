var nameUser = document.getElementById("userName");
var userAge = document.getElementById("ageUser");
var welcome = document.getElementById("wel");
var texting = document.getElementById("text");
var div1 = document.getElementById("container");
var green = document.getElementById("colorGreen");
function noEntry() {
    var noENtry = document.createElement("img");
    noENtry.setAttribute("src", "Entry.gif");
    noENtry.setAttribute("width", "303vw");
    noENtry.setAttribute("hight", "300vh");
    noENtry.style.boxShadow = "20px";
    document.body.appendChild(noENtry);
}
function UserName(userAge) {
    userAge = userAge.value;
    welcome.innerText = "welcome world";
    texting.innerText = nameUser.value;
    div1.style.color = "blue";
    green.addEventListener("mouseover", function greenfinch() {
        green.style.color = "green";
    })
}
function AgeUser(userAge) {
    userAge = userAge.value;
    welcome.innerText = "good bye world";
    texting.innerText = "sorry, no  entry";
    div1.style.color = "red";
    noEntry();
}
function send() {
    if (userAge.value < 18) {
        AgeUser(userAge.value);
    }
    else {
        UserName(userAge.value);
    }
}
