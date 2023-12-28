// selecting element NAVBAR
var navOpenBtn = document.getElementsByClassName("navbar-Bars-Wrap")[0];
var navCloseBtn = document.getElementsByClassName("nav-Close-Btn")[0];
var navlinkEl = document.getElementsByClassName("navlinks")[0];
// gelobal varibales
// functions
// Open Nav
var openNav = function () {
    navlinkEl.classList.remove("active");
};
// close Nav
var closeNav = function () {
    navlinkEl.classList.add("active");
};
// eventlinsters
navOpenBtn.addEventListener("click", openNav);
navCloseBtn.addEventListener("click", closeNav);
//
//
// selecting element HEADER
var headertext1 = document.getElementsByClassName("header-text-1")[0];
var headertext2 = document.getElementsByClassName("header-text-2")[0];
// gelobal variables
var timeCount = 0;
var changeBoolan = false;
// functions
var changeTitles = function () {
    setInterval(function () {
        changeBoolan ? firstTitle() : secondTitle();
    }, 1000);
};
// first title function
var firstTitle = function () {
    if (timeCount < 5) {
        timeCount++;
        console.log(timeCount);
    }
    else if (timeCount < 6) {
        headertext1.classList.add("active");
        headertext2.classList.add("active");
        timeCount++;
        console.log(timeCount);
    }
    else if (timeCount < 7) {
        headertext1.textContent = "HELLO I AM";
        headertext2.textContent = "ANN SMITH";
        headertext1.classList.remove("active");
        headertext2.classList.remove("active");
        changeBoolan = false;
        timeCount = 0;
    }
};
// second title function
var secondTitle = function () {
    if (timeCount < 5) {
        timeCount++;
        console.log(timeCount);
    }
    else if (timeCount < 6) {
        headertext1.classList.add("active");
        headertext2.classList.add("active");
        timeCount++;
        console.log(timeCount);
    }
    else if (timeCount < 7) {
        headertext1.textContent = "I'M FROM LONDON";
        headertext2.textContent = "AN INTERIOR DESIGHNER";
        headertext1.classList.remove("active");
        headertext2.classList.remove("active");
        changeBoolan = true;
        timeCount = 0;
    }
};
// eventlinsters
window.addEventListener("load", changeTitles);
