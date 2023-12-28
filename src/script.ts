// selecting element
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
