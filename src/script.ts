// selecting element NAVBAR
const navOpenBtn = document.getElementsByClassName("navbar-Bars-Wrap")[0];
const navCloseBtn = document.getElementsByClassName("nav-Close-Btn")[0];
const navlinkEl = document.getElementsByClassName("navlinks")[0];

// gelobal varibales

// functions

// Open Nav
const openNav = () => {
  navlinkEl.classList.remove("active");
};

// close Nav
const closeNav = () => {
  navlinkEl.classList.add("active");
};

// eventlinsters
navOpenBtn.addEventListener("click", openNav);
navCloseBtn.addEventListener("click", closeNav);
//
//
// selecting element HEADER
const headertext1 = document.getElementsByClassName("header-text-1")[0];
const headertext2 = document.getElementsByClassName("header-text-2")[0];

// gelobal variables
let timeCount = 0;
let changeBoolan = false;

// functions
const changeTitles = () => {
  setInterval(() => {
    changeBoolan ? firstTitle() : secondTitle();
    timeCount++;
  }, 1000);
};

// first title function
const firstTitle = () => {
  if (timeCount < 5) {
    console.log(timeCount);
  } else if (timeCount < 6) {
    activateMode();
    console.log(timeCount);
  } else if (timeCount < 7) {
    console.log(timeCount);
    headertext1.textContent = "HELLO I AM";
    headertext2.textContent = "ANN SMITH";
    headertext1.classList.remove("active");
    headertext2.classList.remove("active");
    changeBoolan = false;
    timeCount = 0;
  }
};

// second title function
const secondTitle = () => {
  if (timeCount < 5) {
    console.log(timeCount);
  } else if (timeCount < 6) {
    activateMode();
    console.log(timeCount);
  } else if (timeCount < 7) {
    console.log(timeCount);
    headertext1.textContent = "I'M FROM LONDON";
    headertext2.textContent = "AN INTERIOR DESIGHNER";
    headertext1.classList.remove("active");
    headertext2.classList.remove("active");
    changeBoolan = true;
    timeCount = 0;
  }
};

// activatedMode function
const activateMode = () => {
  headertext1.classList.add("active");
  headertext2.classList.add("active");
};

// eventlinsters
window.addEventListener("load", changeTitles);
