// Select DOM elements
const cartLogo = document.querySelector('#cartLogo');
const productItems = document.querySelectorAll('.item');
const cartContainer = document.querySelector('.cart-container');
const totalPriceElement = document.querySelector('.total-price');
const cart = document.querySelector('#cart'); // Cart container
const body = document.body;
const existingCartItems = document.querySelector('cart-item');

// Store product data
const products = [
    { id: 1, name: "Product 1", price: 2999 },
    { id: 2, name: "Product 2", price: 1999 },
    { id: 3, name: "Product 3", price: 5999 },
];

// Cart items array
let cartItems = [];

// Function to initialize the product buttons
productItems.forEach((item, index) => {
    const addToCartButton = item.querySelector('.Add2cart');
    addToCartButton.addEventListener('click', () => addToCart(index));
});

// Add product to the cart
function addToCart(index) {
    const product = products[index];
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Update the cart UI and totals
function updateCart() {
    // Clear existing cart items in the UI
    const existingCartItems = cartContainer.querySelectorAll('.cart-item:not(:last-child)');
    existingCartItems.forEach(item => item.remove());

    let total = 0;

    // Populate the cart
    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} -</p>
            <p class="price">$${item.price}</p>
            <div class="cartButtons">
                <button class="increase">+</button>
                <span class="qty">${item.quantity}</span>
                <button class="decrease">-</button>
                <button class="remove">Remove</button>
            </div>
        `;

        // Add event listeners for cart buttons
        cartItem.querySelector('.increase').addEventListener('click', () => changeQuantity(index, item.quantity + 1));
        cartItem.querySelector('.decrease').addEventListener('click', () => changeQuantity(index, item.quantity - 1));
        cartItem.querySelector('.remove').addEventListener('click', () => removeFromCart(index));

        cartContainer.insertBefore(cartItem, cartContainer.lastElementChild);
    });

    // Update total price
    totalPriceElement.textContent = total.toLocaleString();

    // Update cart item count in the cart icon
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartLogo.querySelector('.fa-cart-shopping').textContent = ` ${totalItems}`;
}

// Change quantity of an item in the cart
function changeQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        cartItems[index].quantity = newQuantity;
    }

    updateCart();
}

// Remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

// Initial setup
updateCart();


// Toggle cart visibility when the cart icon is clicked
cartLogo.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    cart.classList.toggle('active'); // Show/hide cart
    body.classList.toggle('cart-open'); // Prevent background scroll
});

// Close the cart when clicking outside it
document.addEventListener('click', (e) => {
    const isClickInsideCart = cart.contains(e.target);
    const isClickOnCartIcon = cartLogo.contains(e.target);

    // Only hide cart if the click is not inside the cart or on the cart icon
    if (!isClickInsideCart && !isClickOnCartIcon) {
        cart.classList.remove('active'); // Hide cart
        body.classList.remove('cart-open'); // Allow background scroll
    }
});




    
   
           
        
   