let techOne = document.querySelector(".techtextcontent");
let techTwo = document.querySelector(".techtextcontent2");
let techThree = document.querySelector(".techtextcontent3");
let techimageOne = document.querySelector(".techone");
let techimageTwo = document.querySelector(".techtwo");
let techimageThree = document.querySelector(".techthird");
let numberOne = document.querySelector(".number1");
let numberTwo = document.querySelector(".number2");
let numberThree = document.querySelector(".number3");
let aOne = document.querySelector(".oneA");
let aTwo = document.querySelector(".twoB");
let aThree = document.querySelector(".threeC");


function toshowOne() {
    techOne.style.display = "block";
    techimageOne.style.display = "block";
    techTwo.style.display = "none";
    techimageTwo.style.display = "none";
    techThree.style.display = "none";
    techimageThree.style.display = "none";
    numberOne.style.background = "white";
    aOne.style.color = "black";
    numberTwo.style.background = "";
    aTwo.style.color = "white";
    numberThree.style.background = "";
    aThree.style.color = "white";
}

function toshowTwo() {
    
    techTwo.style.display = "block";
    techimageTwo.style.display = "block";
    techOne.style.display = "none";
    techimageOne.style.display = "none";
    techThree.style.display = "none";
    techimageThree.style.display = "none";
    numberTwo.style.background = "white";
    aTwo.style.color = "black";
    numberOne.style.background = "";
    aOne.style.color = "white";
    numberThree.style.background = "";
    aThree.style.color = "white";
}

function toshowThree() {
    
    techTwo.style.display = "none";
    techimageTwo.style.display = "none";
    techOne.style.display = "none";
    techimageOne.style.display = "none";
    techThree.style.display = "block";
    techimageThree.style.display = "block";
    numberThree.style.background = "white";
    aThree.style.color = "black";
    numberTwo.style.background = "";
    aTwo.style.color = "white";
    numberOne.style.background = "";
    aOne.style.color = "white";
}

aOne.addEventListener('click', toshowOne);
aTwo.addEventListener('click', toshowTwo);
aThree.addEventListener('click', toshowThree);