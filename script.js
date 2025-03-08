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
// Add Intersection Observer for Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
});

// Cart System
let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

// Update Cart Display
function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalAmount = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = ${item.name} - $${item.price.toFixed(2)};
        cartList.appendChild(li);
        total += item.price;
    });

    totalAmount.textContent = Total: $${total.toFixed(2)};
}

// Checkout Function
function checkout() {
    alert("Thank you for your order! We will process it shortly.");
    cart = [];
    updateCart();
}

document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    
    // Function to update cart display
    function updateCart() {
        let cartList = document.getElementById("cart");
        let totalAmount = document.getElementById("total");
        
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = ${item.name} - $${item.price.toFixed(2)};
            cartList.appendChild(li);
            total += item.price;
        });

        totalAmount.textContent = total.toFixed(2);
    }

    // Function to add an item to the cart
    function addToCart(name, price, extraChicken, dressing) {
        let finalPrice = price;
        
        // Add extra grilled chicken price if selected
        if (extraChicken && extraChicken.value === "yes") {
            finalPrice += 4.99; 
        }

        // Get selected dressing
        let selectedDressing = dressing ? dressing.value : "No Dressing Selected";

        cart.push({ name: ${name} (Dressing: ${selectedDressing}), price: finalPrice });
        updateCart();
    }

    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let menuItem = this.closest(".menu-item");
            let itemName = menuItem.querySelector("h3").textContent;
            let itemPrice = parseFloat(menuItem.querySelector(".price").textContent.replace("$", ""));
            let extraChickenOption = menuItem.querySelector(".extra-chicken");
            let dressingOption = menuItem.querySelector(".choose-dressing");

            addToCart(itemName, itemPrice, extraChickenOption, dressingOption);
        });
    });
});