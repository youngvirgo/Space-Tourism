
let viewMoon = document.querySelector(".moon");
let moonContent = document.querySelector(".desMoontext");
let viewMars = document.querySelector(".mars");
let marsContent = document.querySelector(".desMarstext");
let viewEuropa = document.querySelector(".europa");
let europaContent = document.querySelector(".desEuropatext");
let viewTitan = document.querySelector(".titan");
let titanContent = document.querySelector(".desTitantext");
document.querySelector("a").classList.add(".lineAfter")


function DestinMoon() {
    viewMoon.style.display="block";
    moonContent.style.display="block";
    viewMars.style.display="none";
    marsContent.style.display="none";
    viewEuropa.style.display="none";
    europaContent.style.display="none";
    viewTitan.style.display="none";
    titanContent.style.display="none";
}
function DestinMars() {
     {
        
        viewMoon.style.display="none";
    moonContent.style.display="none";
    viewMars.style.display="block";
    marsContent.style.display="block";
    viewEuropa.style.display="none";
    europaContent.style.display="none";
    viewTitan.style.display="none";
    titanContent.style.display="none"; 
    }
            
}
function DestinEuropa() {
    viewMoon.style.display="none";
moonContent.style.display="none";
viewMars.style.display="none";
marsContent.style.display="none";
viewEuropa.style.display="block";
europaContent.style.display="block";
viewTitan.style.display="none";
titanContent.style.display="none";  
}
function DestinTitan() {
    viewMoon.style.display="none";
moonContent.style.display="none";
viewMars.style.display="none";
marsContent.style.display="none";
viewEuropa.style.display="none";
europaContent.style.display="none";
viewTitan.style.display="block";
titanContent.style.display="block";  
}
document.querySelector(".moonNav").addEventListener('click', DestinMoon);
document.querySelector(".marsNav").addEventListener('click', DestinMars);
document.querySelector(".europaNav").addEventListener('click', DestinEuropa);
document.querySelector(".titanNav").addEventListener('click', DestinTitan);

