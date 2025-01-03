// Hamburger Menu Toggle
const estHamburger = document.querySelector(".est-hamburger");
const estMainNav = document.querySelector(".est-main-nav");

estHamburger.addEventListener("click", () => {
    estHamburger.classList.toggle("active");
    estMainNav.classList.toggle("show");
});