const container = document.getElementById("container");

const cartContainer = document.getElementById("cart-items");

let cart = [];

let newCart;

let newTotal;


let stock = [

    {id: 1, item: "Playera blanca - Logo rojo", precio: 265, imagen: '<img class="cart-review-img" src="./images/Playera blanca - Logo rojo.png" alt="">'},
    {id: 2, item: "Hoddie gris - Logo rojo", precio: 450, imagen: '<img class="cart-review-img" src="./images/Hoddie gris - Logo rojo.png" alt="">'},
    {id: 3, item: "Hoddie roja - Logo blanco", precio: 450, imagen: '<img class="cart-review-img" src="./images/Hoodie roja - Logo blanco.png" alt="">'},
    {id: 4, item: "Playera negra - Logo blanco", precio: 265, imagen: '<img class="cart-review-img" src="./images/Playera negra - Logo blanco.png" alt="">'},
    {id: 5, item: "Playera roja - Logo blanco", precio: 265, imagen: '<img class="cart-review-img" src="./images/Playera roja - Logo blanco.png" alt="">'},
    {id: 6, item: "Sudadera gris - Logo negro", precio: 300, imagen: '<img class="cart-review-img" src="./images/Sudadera gris - Logo negro.png" alt="">'},
    {id: 7, item: "Sudadera gris - Logo rojo", precio: 300, imagen: '<img class="cart-review-img" src="./images/Sudadera gris - Logo rojo.png" alt="">'},
    {id: 8, item: "Hoddie negra - Logo blanco", precio: 450, imagen: '<img class="cart-review-img" src="./images/Hoddie negra - Logo blanco.png" alt="">'}

];

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
    console.log(total.textContent)
}

const deleteItem = (prodId) => {
    const item = cart.find((prod) => prod.id === prodId)
    const index = cart.indexOf(item)
    cart.splice(index, 1)
    upDateCart()
    console.log(total.textContent)
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
    newTotal = total.textContent
    localStorage.setItem("newTotal", newTotal)
}

if(localStorage.getItem("newCart")) {
    newCart = JSON.parse(localStorage.getItem("newCart"))
    console.log(cart)
    cart = newCart;
    upDateCart()
}

if(localStorage.getItem("newTotal")) {
    newTotal = localStorage.getItem("newTotal")
    upDateCart()
}
