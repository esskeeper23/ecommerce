const container = document.getElementById("container");

const cartContainer = document.getElementById("cart-items");

let cart = [];

let stock = [

    {id: 1, item: "Playera blanca - Logo rojo", precio: 265, imagen: '<img class="item-image" src="./images/Playera blanca - Logo rojo.png" alt="">'},
    {id: 2, item: "Hoddie gris - Logo rojo", precio: 450, imagen: '<img class="item-image" src="./images/Hoddie gris - Logo rojo.png" alt="">'},
    {id: 3, item: "Hoddie roja - Logo blanco", precio: 450, imagen: '<img class="item-image"item-image src="./images/Hoodie roja - Logo blanco.png" alt="">'},
    {id: 4, item: "Playera roja - Logo blanco", precio: 265, imagen: '<img class="item-image" src="./images/Playera roja - Logo blanco.png" alt="">'},
    {id: 5, item: "Sudadera gris - Logo negro", precio: 300, imagen: '<img class="item-image" src="./images/Sudadera gris - Logo negro.png" alt="">'},
    {id: 6, item: "Sudadera gris - Logo rojo", precio: 300, imagen: '<img class="item-image" src="./images/Sudadera gris - Logo rojo.png" alt="">'},
    {id: 7, item: "Hoddie negra - Logo blanco", precio: 450, imagen: '<img class="item-image" src="./images/Hoddie negra - Logo blanco.png" alt="">'}

];

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("newCart")) {
        cart = JSON.parse(localStorage.getItem("newCart"))
        upDateCart()
    }
})

stock.forEach((stock) => {
    const div = document.createElement('div')
    div.classList.add("item", "col-md-3")
    div.innerHTML = `

    ${stock.imagen}
    <div>
        <p class="col-md-8 item-text">${stock.item}</p>
        <p style="text-align:end;" class="item-text">$${stock.precio}</p>
    </div>
    <button id="agregar${stock.id}" class="button">Agregar a carrito</button>
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
}

const deleteItem = (prodId) => {
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
                <p class="item-text"  id="cart-item-name">${prod.item}</p>
                <p class="item-text" id="cart-item-price">${prod.precio}</p>
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

