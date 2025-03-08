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
// Function to scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showSection(sectionId) {
    document.querySelectorAll('.menu-section').forEach(section => {
        section.style.display = "none";  // Hide all sections
    });
    document.getElementById(sectionId).style.display = "block";  // Show selected section
}


function updatePrice(sizeId, priceId) {
    let sizeSelect = document.getElementById(sizeId);
    let selectedPrice = sizeSelect.value;
    document.getElementById(priceId).innerText = `$${selectedPrice}`;
}
function updateToppingPrice(sizeId, toppingContainerId, priceId) {
    let sizeDropdown = document.getElementById(sizeId);
    let selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    let toppingPrice = selectedOption.getAttribute("data-topping-price");

    // Update displayed topping price
    document.getElementById(`topping-price${sizeId.replace('size', '')}`).innerText = toppingPrice;
}

function updateToppingPrice(sizeId, toppingContainerId, priceId) {
    let sizeDropdown = document.getElementById(sizeId);
    let selectedOption = sizeDropdown.options[sizeDropdown.selectedIndex];
    let toppingPrice = selectedOption.getAttribute("data-topping-price");
    
    // Update displayed topping price dynamically
    document.getElementById(`topping-price${sizeId.replace('size', '')}`).innerText = toppingPrice;

    // Update main pizza price dynamically
    document.getElementById(priceId).innerText = `$${selectedOption.value}`;
}

function addTopping(pizzaIndex) {
    let container = document.getElementById(`topping-list${pizzaIndex}`);

    let newSelect = document.createElement("select");
    newSelect.className = "topping-dropdown";
    newSelect.innerHTML = `
        <option value="None">None</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Sausage">Sausage</option>
        <option value="Mushrooms">Mushrooms</option>
        <option value="Onions">Onions</option>
        <option value="Peppers">Peppers</option>
    `;

    container.appendChild(newSelect);
}
