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
  if (timeCount < 3) {
  } else if (timeCount < 4) {
    activateMode();
  } else if (timeCount < 5) {
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
  if (timeCount < 3) {
  } else if (timeCount < 4) {
    activateMode();
  } else if (timeCount < 5) {
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
//
//
// selecting element ABOUT
const aboutEl: any = document.getElementsByClassName("about")[0];
const aboutWrap: any = document.getElementsByClassName("about-Wrap")[0];

// functions

const aboutShow = () => {
  // check if window scroll y is higher then aboutEl height
  if (window.scrollY > aboutEl.offsetHeight - 600) {
    aboutWrap.classList.add("about-Active");
  } else {
    aboutWrap.classList.remove("about-Active");
  }
};

// eventlinsters
window.addEventListener("scroll", aboutShow);
//
//
// selecting element SERVICE
const serviceEl = document.getElementsByClassName("service")[0];
const serviceTop = document.getElementsByClassName("service-Top")[0];
const serviceBottom = document.getElementsByClassName("service-Bottom")[0];

// functions
const serviceShow = () => {
  // check if window scroll y is higher then aboutEl height
  if (window.scrollY > serviceEl.offsetHeight - 600) {
    serviceTop.classList.add("about-Active");
  } else {
    serviceBottom.classList.remove("about-Active");
  }
};
// check if window scroll y is higher then  height

// eventlinsters
