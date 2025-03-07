document.addEventListener("DOMContentLoaded", function() {
    console.log("Sopranos Pizzeria website is loaded!");
});
let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ name: item, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    let totalAmount = document.getElementById("total");
    
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    totalAmount.textContent = total.toFixed(2);
}

function checkout() {
    alert("Thank you for your order! We will process it shortly.");
    cart = [];
    total = 0;
    updateCart();
}


