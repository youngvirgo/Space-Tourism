document.querySelector(".ham").addEventListener("click",function () {
    document.querySelector(".dropdownContent").style.display = "block";
    document.querySelector(".ham").style.display = "none";
})
document.querySelector(".close").addEventListener("click",function () {
    document.querySelector(".dropdownContent").style.display = "none";
    document.querySelector(".ham").style.display = "block";
})
