var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var toToggle = document.querySelectorAll(".toggleColour");
var navlink = document.getElementById("nav-link");
// var price = document.getElementById("price");

document.addEventListener("scroll", function () {
  /*aplica las clases al hacer scroll*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");
    navlink.classList.remove("nav-link-active");

    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-blue-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-50");
    navcontent.classList.remove("md:text-white");
    navcontent.classList.add("bg-white");
    navcontent.classList.add("text-gray-700");
  } else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    navlink.classList.add("nav-link-active");

    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-blue-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-50");
    navcontent.classList.add("text-gray-700");
    navcontent.classList.add("md:text-white");
  }
});

/*Responsive NAV*/
var navlinkAll = document.querySelectorAll("#nav-link");
var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");
document.onclick = check;

function check(e) {

  var target = (e && e.target) || (e && e.srcElement);

  // checkLink(target);

  //Nav Menu hamburger
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}

navaction.addEventListener("click", function () {
  navMenuDiv.classList.add("hidden");
  for (var i = 0; i < navlinkAll.length; i++) {
    navlinkAll[i].classList.remove("nav-link-active");
  }
});
// cambia los estilo al dar click al navlink si encuentran una forma mas elegante
function activeLink(x) {
  for (var i = 0; i < navlinkAll.length; i++) {
    navlinkAll[i].classList.remove("nav-link-active");
  }
  navMenuDiv.classList.add("hidden");
  x.classList.add("nav-link-active");
}