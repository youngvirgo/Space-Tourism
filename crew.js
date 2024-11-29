let context1 = document.querySelector(".crewcontenttext");
let context2 = document.querySelector(".crewcontenttext2");
let context3 = document.querySelector(".crewcontenttext3");
let context4 = document.querySelector(".crewcontenttext4");
let crewImage1 = document.querySelector(".crewOne");
let crewImage2 = document.querySelector(".crewTwo");
let crewImage3 = document.querySelector(".crewThree");
let crewImage4 = document.querySelector(".crewFour");
let anchorClick1 = document.querySelector(".a1");
let anchorClick2 = document.querySelector(".a2");
let anchorClick3 = document.querySelector(".a3");
let anchorClick4 = document.querySelector(".a4");
// let radioBtn = document.querySelector(".crewcontentradio");
// let leftArrow = document.querySelector(".ancdir1");
// let rightArrow = document.querySelector(".ancdir2");


function plus1() {
    context2.style.display = "none";
    crewImage2.style.display = "none";
    context1.style.display = "block";
    crewImage1.style.display = "block";
    context3.style.display = "none";
    crewImage3.style.display = "none";
    context4.style.display = "none";
    crewImage4.style.display = "none";
}

function plus2() {
    context2.style.display = "block";
    crewImage2.style.display = "block";
    context1.style.display = "none";
    crewImage1.style.display = "none";
    context3.style.display = "none";
    crewImage3.style.display = "none";
    context4.style.display = "none";
    crewImage4.style.display = "none";
}
function plus3() {
    context2.style.display = "none";
    crewImage2.style.display = "none";
    context1.style.display = "none";
    crewImage1.style.display = "none";
    context3.style.display = "block";
    crewImage3.style.display = "block";
    context4.style.display = "none";
    crewImage4.style.display = "none";
}

function plus4() {
    context2.style.display = "none";
    crewImage2.style.display = "none";
    context1.style.display = "none";
    crewImage1.style.display = "none";
    context3.style.display = "none";
    crewImage3.style.display = "none";
    context4.style.display = "block";
    crewImage4.style.display = "block";
}


anchorClick1.addEventListener('click', plus1);
anchorClick2.addEventListener('click', plus2);
anchorClick3.addEventListener('click', plus3);
anchorClick4.addEventListener('click', plus4);
