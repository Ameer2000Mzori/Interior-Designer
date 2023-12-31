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
        timeCount++;
    }, 1000);
};
// first title function
var firstTitle = function () {
    if (timeCount < 3) {
    }
    else if (timeCount < 4) {
        activateMode();
    }
    else if (timeCount < 5) {
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
    if (timeCount < 3) {
    }
    else if (timeCount < 4) {
        activateMode();
    }
    else if (timeCount < 5) {
        headertext1.textContent = "I'M FROM LONDON";
        headertext2.textContent = "AN INTERIOR DESIGHNER";
        headertext1.classList.remove("active");
        headertext2.classList.remove("active");
        changeBoolan = true;
        timeCount = 0;
    }
};
// activatedMode function
var activateMode = function () {
    headertext1.classList.add("active");
    headertext2.classList.add("active");
};
// eventlinsters
window.addEventListener("load", changeTitles);
//
//
// selecting element ABOUT
var aboutEl = document.getElementsByClassName("about")[0];
var aboutWrap = document.getElementsByClassName("about-Wrap")[0];
// functions
var aboutShow = function () {
    // check if window scroll y is higher then aboutEl height
    if (window.scrollY > aboutEl.offsetHeight - 600) {
        aboutWrap.classList.add("about-Active");
    }
    else {
        aboutWrap.classList.remove("about-Active");
    }
};
// eventlinsters
window.addEventListener("scroll", aboutShow);
//
//
// selecting element SERVICE
var serviceEl = document.getElementsByClassName("service")[0];
var serviceTop = document.getElementsByClassName("service-Top-Wrap")[0];
var serviceBottom = document.getElementsByClassName("service-Bottom-Wrap")[0];
// functions
var serviceShow = function () {
    // check if window scroll y is higher then aboutEl height
    if (window.scrollY > serviceEl.offsetHeight) {
        serviceTop.classList.add("service-Active");
        if (window.scrollY > serviceEl.offsetHeight + 200) {
            serviceBottom.classList.add("service-Active");
        }
        else {
            serviceBottom.classList.remove("service-Active");
        }
    }
    else {
        serviceTop.classList.remove("service-Active");
        serviceBottom.classList.remove("service-Active");
    }
};
// eventlinsters
window.addEventListener("scroll", serviceShow);
//
//
// selecting element PROJECTS
var projectBottomWrapEl = document.getElementsByClassName("project-Bottom-Wrap")[0];
var projectTopWrapTextEl = document.getElementsByClassName("project-Top-Wrap-Text")[0];
// functions
var projectShow = function () {
    console.log(window.scrollY);
    if (window.scrollY > 2100) {
        projectTopWrapTextEl.classList.add("project-active");
        if (window.scrollY > 2000 + 300) {
            projectBottomWrapEl.classList.add("project-active");
        }
    }
    else {
        projectBottomWrapEl.classList.remove("project-active");
        projectTopWrapTextEl.classList.remove("project-active");
    }
};
// eventlinsters
window.addEventListener("scroll", projectShow);
//
//
// selecting element ACHIVEMENTS
var achiveBottomTexts = document.querySelectorAll(".achive-Bottom-Text-2");
// functions
var countAchivementsNums = function () { };
// eventlinsters
window.addEventListener("scroll", countAchivementsNums);
