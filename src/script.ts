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
const serviceEl: any = document.getElementsByClassName("service")[0];
const serviceTop: any = document.getElementsByClassName("service-Top-Wrap")[0];
const serviceBottom: any = document.getElementsByClassName(
  "service-Bottom-Wrap"
)[0];

// functions
const serviceShow = () => {
  // check if window scroll y is higher then aboutEl height
  if (window.scrollY > serviceEl.offsetHeight) {
    serviceTop.classList.add("service-Active");

    if (window.scrollY > serviceEl.offsetHeight + 200) {
      serviceBottom.classList.add("service-Active");
    } else {
      serviceBottom.classList.remove("service-Active");
    }
  } else {
    serviceTop.classList.remove("service-Active");
    serviceBottom.classList.remove("service-Active");
  }
};

// eventlinsters
window.addEventListener("scroll", serviceShow);
//
//
// selecting element PROJECTS
const projectBottomWrapEl = document.getElementsByClassName(
  "project-Bottom-Wrap"
)[0];
const projectTopWrapTextEl = document.getElementsByClassName(
  "project-Top-Wrap-Text"
)[0];
// functions
const projectShow = () => {
  console.log(window.scrollY);
  if (window.scrollY > 2100) {
    projectTopWrapTextEl.classList.add("project-active");
    if (window.scrollY > 2000 + 300) {
      projectBottomWrapEl.classList.add("project-active");
    }
  } else {
    projectBottomWrapEl.classList.remove("project-active");
    projectTopWrapTextEl.classList.remove("project-active");
  }
};

// eventlinsters
window.addEventListener("scroll", projectShow);
//
//
// selecting element ACHIVEMENTS
const achiveBottomTexts = document.querySelectorAll(".achive-Bottom-Text-2");

let numOne = 0;
let numTwo = 0;
let numThree = 0;
// functions

const countAchivementsNums = () => {
  if (window.scrollY > 4600) {
    let numinterval1 = setInterval(() => {
      numOne++;
      if (numOne > 1563) {
        setInterval(() => {
          clearInterval(numinterval1);
        });
      } else {
        achiveBottomTexts[0].textContent = `${numOne}`;
      }
    }, 200);

    let numinterval2 = setInterval(() => {
      numTwo++;
      if (numTwo > 690) {
        setInterval(() => {
          clearInterval(numinterval2);
        });
      } else {
        achiveBottomTexts[1].textContent = `${numTwo}`;
      }
    }, 200);

    let numinterval3 = setInterval(() => {
      numThree++;
      if (numThree > 1760) {
        setInterval(() => {
          clearInterval(numinterval3);
        });
      } else {
        achiveBottomTexts[2].textContent = `${numThree}`;
      }
    }, 200);
  } else {
    numOne = 0;
    numTwo = 0;
    numThree = 0;
  }
};

// eventlinsters
window.addEventListener("scroll", countAchivementsNums);
