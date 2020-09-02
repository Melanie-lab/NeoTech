"use strict";

function mobileNav() {
  const navSS = document.getElementById("navSS");
  const menuIcon = document.querySelector(".icon");
  let top;

  if (navSS.style.display === "block") {
    navSS.style.display = "none";
    /*    window.scrollTo(top); */
  } else {
    navSS.style.display = "block";
    top = window.pageYOffset;
    /*     console.log(top);
    window.scrollTo({
      top: 500,
      left: 0,
      behaviour: "smooth",
    }); */
    /*     barTransform(); */
  }
  /*   (function (menuIcon) {
    menuIcon.classList.toggle("change");
  })(); */
}

const navLink = document.querySelectorAll(".nav_link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", mobileNav);
}

/* const menuBars = document.querySelectorAll(".icon div");
function barTransform() {
  menuBars.classList.toggle("change");
  console.log("change");
}
 */
