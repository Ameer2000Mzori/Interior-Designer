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
var changeBoolan = true;
// functions
var changeTitles = function () {
    setInterval(function () {
        changeBoolan ? firstTitle() : secondTitle();
    }, 1000);
};
// first title function
var firstTitle = function () { };
// second title function
var secondTitle = function () { };
// eventlinsters
window.addEventListener("load", changeTitles);
