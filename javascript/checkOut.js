let cart = JSON.parse(localStorage.getItem('newCart')) || [];

const container = document.getElementById("container");

const reviewSubTotal = document.querySelector(".review-sub-total");

const subTotal = document.querySelector(".sub-total");

const myTotal = document.querySelector(".total");

let test = 10;

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
    container.appendChild(div)
    })

    function cartReviewHidden() {
        const hide = document.getElementsByClassName("cart-container-hidden");
      
        Array.from(hide).forEach((x) => {
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        })
    }

    function getTotal () {
        let tempTotal = 0;
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            tempTotal += cart[i].precio
        }
        reviewSubTotal.innerText = tempTotal
        subTotal.innerText = tempTotal
        total = tempTotal + 45;
        myTotal.innerText = total;
        
    }

    getTotal();