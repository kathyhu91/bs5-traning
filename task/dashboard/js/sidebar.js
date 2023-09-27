// side bar
const toggleNavBtn = document.querySelector("#toggle-nav-btn");
const body = document.querySelector("body");
function toggleNav(e) {
  e.preventDefault();
  body.classList.toggle("sidebar--toggled");
}
toggleNavBtn.addEventListener("click", toggleNav);

// canvas
