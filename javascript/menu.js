const openCart = document.querySelector(".cart");
const openMenuBtn = document.querySelector(".open-cart");
const closeMenuBtn = document.querySelector(".close-cart");
const noScroll = document.querySelector(".scroll");

function toggleMenu() {
    openCart.classList.toggle("cart_opened");
    noScroll.classList.toggle("no-scroll");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);