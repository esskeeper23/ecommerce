const openCart = document.querySelector(".cart");
const openMenuBtn = document.querySelector(".open-cart");
const closeMenuBtn = document.querySelector(".close-cart");

function toggleMenu() {
    openCart.classList.toggle("cart_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);