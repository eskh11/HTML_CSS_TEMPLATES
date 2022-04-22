let menuIcon = document.querySelector(".menuicon");
let dropMenu = document.getElementById("dropmn");
menuIcon.onclick = function () {
  menuIcon.classList.toggle("active");
  if (menuIcon.classList.contains("active")) {
    dropMenu.style.cssText = "margin-top: 0;   opacity: 1";
  } else {
    dropMenu.style.cssText = "margin-top: -425px;   opacity: 0";
  }
};
let restuaranrMenuTile = document.querySelector("a.menu");
let menuPhoneTile = document.querySelector(".menuphone");
let restuaranrMenu = document.getElementById("menu");
restuaranrMenuTile.onclick = function () {
  restuaranrMenuTile.classList.toggle("active");
  menuPhoneTile.classList.toggle("active");
  if (restuaranrMenuTile.classList.contains("active")) {
    restuaranrMenu.style.cssText =
      "   transform: translateX(-50%) scale(0.8); opacity: 1;   z-index: 2;";
  } else {
    restuaranrMenu.style.cssText =
      "   transform: translateX(-50%) scale(0);  opacity: 0;   z-index: -10;";
  }
};
menuPhoneTile.onclick = function () {
  menuPhoneTile.classList.toggle("active");
  restuaranrMenuTile.classList.toggle("active");
  if (menuPhoneTile.classList.contains("active")) {
    dropMenu.style.cssText = "margin-top: -425px;   opacity: 0";
    menuIcon.classList.toggle("active");
    restuaranrMenu.style.cssText =
      "   transform: translateX(-50%) scale(0.8); opacity: 1;   z-index: 2;";
  } else {
    restuaranrMenu.style.cssText =
      "   transform: translateX(-50%) scale(0);  opacity: 0;   z-index: -10;";
  }
};
let closeMenueTile = document.querySelector(".closemenu");
closeMenueTile.onclick = function () {
  restuaranrMenu.style.cssText =
    "   transform: translateX(-50%) scale(0);  opacity: 0;   z-index: -10;";
  restuaranrMenuTile.classList.toggle("active");
  menuPhoneTile.classList.toggle("active");
};
let scrollIcon = document.querySelector(".scrollup");
window.onscroll = function () {
  this.scrollY >= 1000
    ? scrollIcon.classList.add("show")
    : scrollIcon.classList.remove("show");
};

scrollIcon.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
