import {stock} from "./javascript/data.js"

const container = document.getElementById("container");

const cartContainer = document.getElementById("cart-items");

const deleteFromCart = document.querySelector("#delete-item");

let cart = [];


document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("newCart")) {
        cart = JSON.parse(localStorage.getItem("newCart"))
        upDateCart()
    }
})

stock.forEach((stock) => {
    const div = document.createElement('div')
    div.classList.add("col-md-1")
    div.innerHTML = `
    <div class="item-img-container col-md-10"> 
        ${stock.imagen}
    </div>
    <div>
        <p class="col-md-8">${stock.item}</p>
        <p style="text-align:end;">$${stock.precio}</p>
    </div>
    <button id="agregar${stock.id}">Agregar a carrito</button>
`
    container.appendChild(div)
    const button = document.getElementById(`agregar${stock.id}`)

    button.addEventListener('click', () => {
    addToCart(stock.id)
    })

})

function addToCart(prodId) {
    const item = stock.find((prod) => prod.id === prodId);
    cart.push(item);
    upDateCart()
    console.log(cart);
}

function deleteItem (prodId) {
    const item = cart.find((prod) => prod.id === prodId)
    const index = cart.indexOf(item)
    cart.splice(index, 1)
    upDateCart()
}



const upDateCart = () => {
    cartContainer.innerHTML = ""

    cart.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("cart-review-cotainer")
        div.innerHTML = `
        <div class="cart-image col-md-5">
            ${prod.imagen}
        </div>
        <div class="col-md-5 d-flex flex-column  justify-content-between">
            <div>
                <p id="cart-item-name">${prod.item}</p>
                <p id="cart-item-price">${prod.precio}</p>
            </div>
            <div class="d-flex justify-content-between">
                <p >Talla: <span id="cart-item-size">TBD</span></p>
                <p id="cart-item-color">
                    Color: 
                    <div id="color"></div>
                </p>
            </div>
            <div class="d-flex quantity">
                <button>-</button>
                <p>TBD</p>
                <button>+</button>
            </div>
        </div>
        <div class="col-md-2 delete-container">
            <button onclick="deleteItem(${prod.id})" id="delete-item"><img class="delete-img" src="./images/trash-solid.svg" alt=""></button>
        </div>
        `
        cartContainer.appendChild(div)

       localStorage.setItem("newCart", JSON.stringify(cart))
    })
    total.innerText = cart.reduce((acc, prod) => acc + prod.precio, 0)
}

