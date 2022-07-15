let cart = JSON.parse(localStorage.getItem('newCart'));

const container = document.getElementById("container");

const reviewSubTotal = document.querySelector(".review-sub-total");

const subTotal = document.querySelector(".sub-total");

const myTotal = document.querySelector(".total");

const hideForm = document.querySelector(".form-container");

const button = document.getElementById("button");

const order = document.querySelector(".order-container");

let formData = [];


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

    function fillForm() {

        const fName = document.getElementById("fName").value;
        const lName = document.getElementById("lName").value;
        const eMail = document.getElementById("eMail").value;
        const address = document.getElementById("address").value;
        const addressNumber = document.getElementById("addressNumber").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const inputState = document.getElementById("inputState").value;
        const card = document.getElementById("inputPayment").value;

        if (fName == "" || 
            lName == "" || 
            eMail == "" || 
            address == "" || 
            addressNumber == "" || 
            city == "" ||
            zip == "" || 
            inputState == "" || 
            card == "") {
            alert("Todos los campos son obligatorios")
        }else {
            formData.push({
                name: fName, 
                lastName: lName, 
                eMail: eMail, 
                address:address, 
                addressNumber: addressNumber, 
                city: city, 
                zip: zip, 
                country: inputState,
                cart: card
            });
        
            const div = document.createElement("div")
            div.className = ("order")
            div.innerHTML = `
            <div class="success">
                <img src="./images/success.png" alt="">
                <p>gracias por su compra</p>
            </div>
            `
            order.appendChild(div)
    
            hideForm.style.display = "none"
            order.style.display = "flex"

            localStorage.clear();
    
        }


    }
