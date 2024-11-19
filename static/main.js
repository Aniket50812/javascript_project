const products = [
    // Electronics
    { id: 1, name: 'Smartphone X1', price: 299.99, mrp: 499.99, image: 'static/images/smartphonex.jpg', description: 'Latest smartphone with advanced features.', category: 'Electronics', deliveryDate: '28 August' },
    { id: 2, name: 'Laptop Pro 15', price: 999.99, mrp: 1499.99, image: 'static/images/laptop.jpg', description: 'High performance laptop for professionals.', category: 'Electronics', deliveryDate: '2 September' },
    { id: 3, name: 'Bluetooth Headphones', price: 79.99, mrp: 129.99, image: 'static/images/headphones.jpg', description: 'Wireless headphones with noise cancellation.', category: 'Electronics', deliveryDate: '30 August' },
    { id: 4, name: 'Smartwatch Ultra', price: 199.99, mrp: 299.99, image: 'static/images/smartwatch.jpg', description: 'Smartwatch with fitness tracking and notifications.', category: 'Electronics', deliveryDate: '4 September' },
    { id: 5, name: '4K TV 55"', price: 649.99, mrp: 899.99, image: 'static/images/tv.jpg', description: '55-inch 4K Ultra HD television.', category: 'Electronics', deliveryDate: '28 August' },
    { id: 6, name: 'Digital Camera Z3', price: 349.99, mrp: 499.99, image: 'static/images/camera.jpg', description: 'High-resolution digital camera for photography enthusiasts.', category: 'Electronics', deliveryDate: '6 September' },
    { id: 7, name: 'Tablet Pro 10', price: 399.99, mrp: 599.99, image: 'static/images/tablet.jpg', description: '10-inch tablet with high performance.', category: 'Electronics', deliveryDate: '30 August' },
    { id: 8, name: 'Home Speaker System', price: 129.99, mrp: 199.99, image: 'static/images/speaker.jpg', description: 'Wireless home speaker system with surround sound.', category: 'Electronics', deliveryDate: '3 September' },
    { id: 9, name: 'Smart Light Bulbs', price: 59.99, mrp: 89.99, image: 'static/images/lights.jpg', description: 'Pack of smart light bulbs with adjustable colors.', category: 'Electronics', deliveryDate: '28 August' },
    { id: 10, name: 'Wireless Charger Pad', price: 29.99, mrp: 49.99, image: 'static/images/pad.jpg', description: 'Qi wireless charger pad for compatible devices.', category: 'Electronics', deliveryDate: '6 September' },

    // Books
    { id: 11, name: 'Book of Adventures', price: 14.99, mrp: 19.99, image: 'static/images/book.jpg', description: 'An exciting book of adventures for young readers.', category: 'Books', deliveryDate: '28 August' },
    { id: 12, name: 'The Great Novel', price: 24.99, mrp: 34.99, image: 'static/images/novel.jpg', description: 'A great novel with gripping stories.', category: 'Books', deliveryDate: '4 September' },
    { id: 13, name: 'Cooking for Beginners', price: 19.99, mrp: 29.99, image: 'static/images/cooking.jpg', description: 'A cookbook with easy recipes for beginners.', category: 'Books', deliveryDate: '30 August' },
    { id: 14, name: 'Science Made Simple', price: 17.99, mrp: 24.99, image: 'static/images/science.jpg', description: 'A simplified guide to understanding science.', category: 'Books', deliveryDate: '6 September' },
    { id: 15, name: 'Mystery of the Lost City', price: 22.99, mrp: 29.99, image: 'static/images/mistry.jpg', description: 'A thrilling mystery novel.', category: 'Books', deliveryDate: '28 August' },
    { id: 16, name: 'History 101', price: 25.99, mrp: 34.99, image: 'static/images/history.jpg', description: 'An introduction to world history.', category: 'Books', deliveryDate: '2 September' },
    { id: 17, name: 'Travel the World', price: 29.99, mrp: 39.99, image: 'static/images/travel.jpg', description: 'A guidebook for world travel enthusiasts.', category: 'Books', deliveryDate: '30 August' },
    { id: 18, name: 'Art of Painting', price: 19.99, mrp: 27.99, image: 'static/images/painting.jpg', description: 'A comprehensive guide to painting techniques.', category: 'Books', deliveryDate: '3 September' },
    { id: 19, name: 'The Future of Technology', price: 21.99, mrp: 29.99, image: 'static/images/technology.jpg', description: 'A book on emerging technology trends.', category: 'Books', deliveryDate: '28 August' },
    { id: 20, name: 'Space Exploration', price: 18.99, mrp: 25.99, image: 'static/images/space.jpg', description: 'An insightful book about space exploration.', category: 'Books', deliveryDate: '4 September' },

    // Fashion
    { id: 21, name: 'Classic T-Shirt', price: 19.99, mrp: 29.99, image: 'static/images/tshirt.jpg', description: 'Comfortable and stylish classic t-shirt.', category: 'Fashion', deliveryDate: '28 August' },
    { id: 22, name: 'Summer Dress', price: 39.99, mrp: 59.99, image: 'static/images/summer.jpg', description: 'Light and breezy summer dress for any occasion.', category: 'Fashion', deliveryDate: '6 September' },
    { id: 23, name: 'Leather Jacket', price: 99.99, mrp: 149.99, image: 'static/images/jacket.jpg', description: 'Stylish leather jacket with a modern fit.', category: 'Fashion', deliveryDate: '2 September' },
    { id: 24, name: 'Running Shoes', price: 59.99, mrp: 89.99, image: 'static/images/shoes.jpg', description: 'Comfortable running shoes for fitness enthusiasts.', category: 'Fashion', deliveryDate: '30 August' },
    { id: 25, name: 'Casual Jeans', price: 49.99, mrp: 69.99, image: 'static/images/jeans.jpg', description: 'Durable and fashionable casual jeans.', category: 'Fashion', deliveryDate: '3 September' },
    { id: 26, name: 'Wool Sweater', price: 79.99, mrp: 99.99, image: 'static/images/sweater.jpg', description: 'Warm and cozy wool sweater.', category: 'Fashion', deliveryDate: '28 August' },
    { id: 27, name: 'Sunglasses', price: 29.99, mrp: 39.99, image: 'static/images/sunglass.jpg', description: 'Stylish sunglasses with UV protection.', category: 'Fashion', deliveryDate: '6 September' },
    { id: 28, name: 'Formal Shirt', price: 34.99, mrp: 49.99, image: 'static/images/shirts.jpg', description: 'Elegant formal shirt for office wear.', category: 'Fashion', deliveryDate: '4 September' },
    { id: 29, name: 'Winter Coat', price: 129.99, mrp: 199.99, image: 'static/images/coat.jpg', description: 'Insulated winter coat to keep you warm.', category: 'Fashion', deliveryDate: '28 August' },
    { id: 30, name: 'Handbag', price: 89.99, mrp: 119.99, image: 'static/images/bag.jpg', description: 'Stylish handbag for everyday use.', category: 'Fashion', deliveryDate: '2 September' },

    // Bags
    { id: 31, name: 'Backpack Pro', price: 69.99, mrp: 99.99, image: 'static/images/bagpack.jpg', description: 'Durable and spacious backpack.', category: 'Bags', deliveryDate: '28 August' },
    { id: 32, name: 'Travel Duffel Bag', price: 89.99, mrp: 129.99, image: 'static/images/travelbag.jpg', description: 'Versatile duffel bag for travel.', category: 'Bags', deliveryDate: '4 September' },
    { id: 33, name: 'Laptop Messenger Bag', price: 49.99, mrp: 69.99, image: 'static/images/laptopbag.jpg', description: 'Stylish messenger bag for laptops.',category: 'Bags', deliveryDate: '5 September' },
    { id: 34, name: 'Gym Bag', price: 39.99, mrp: 59.99, image: 'static/images/gymbag.jpg', description: 'Perfect bag for gym enthusiasts.', category: 'Bags', deliveryDate: '28 August' },
    { id: 35, name: 'Tote Bag', price: 29.99, mrp: 39.99, image: 'static/images/totebag.jpg', description: 'Spacious tote bag for everyday use.', category: 'Bags', deliveryDate: '4 September' },
    { id: 36, name: 'Handcrafted Leather Bag', price: 129.99, mrp: 179.99, image: 'static/images/leatherbag.jpg', description: 'Elegant handcrafted leather bag.', category: 'Bags', deliveryDate: '6 September' },
    { id: 37, name: 'School Backpack', price: 44.99, mrp: 59.99, image: 'static/images/schoolbag.jpg', description: 'Functional backpack for school.', category: 'Bags', deliveryDate: '2 September' },
    { id: 38, name: 'Weekend Travel Bag', price: 79.99, mrp: 109.99, image: 'static/images/weekendbag.jpg', description: 'Ideal bag for weekend getaways.', category: 'Bags', deliveryDate: '28 August' },
    { id: 39, name: 'Designer Clutch', price: 59.99, mrp: 89.99, image: 'static/images/clutch.jpg', description: 'Trendy clutch for special occasions.', category: 'Bags', deliveryDate: '30 August' },
    { id: 40, name: 'Sports Bag', price: 39.99, mrp: 54.99, image: 'static/images/sportsbag.jpg', description: 'Bag designed for sports and fitness activities.', category: 'Bags', deliveryDate: '3 September' },

    // Toys
    { id: 41, name: 'Building Blocks Set', price: 29.99, mrp: 39.99, image: 'static/images/buildingblocks.jpg', description: 'Creative building blocks for kids.', category: 'Toys', deliveryDate: '28 August' },
    { id: 42, name: 'Remote Control Car', price: 49.99, mrp: 69.99, image: 'static/images/rccar.jpg', description: 'Fun remote control car for children.', category: 'Toys', deliveryDate: '6 September' },
    { id: 43, name: 'Action Figure', price: 19.99, mrp: 24.99, image: 'static/images/actionfigure.jpg', description: 'Collectible action figure for kids.', category: 'Toys', deliveryDate: '2 September' },
    { id: 44, name: 'Educational Puzzle', price: 24.99, mrp: 34.99, image: 'static/images/puzzle.jpg', description: 'Puzzle to enhance learning and problem-solving.', category: 'Toys', deliveryDate: '28 August' },
    { id: 45, name: 'Plush Toy', price: 15.99, mrp: 22.99, image: 'static/images/plush.jpg', description: 'Soft and cuddly plush toy for comfort.', category: 'Toys', deliveryDate: '30 August' },
    { id: 46, name: 'Interactive Board Game', price: 39.99, mrp: 54.99, image: 'static/images/boardgame.jpg', description: 'Board game for family fun and interaction.', category: 'Toys', deliveryDate: '3 September' },
    { id: 47, name: 'Toy Train Set', price: 89.99, mrp: 119.99, image: 'static/images/trainset.jpg', description: 'Detailed toy train set with tracks.', category: 'Toys', deliveryDate: '4 September' },
    { id: 48, name: 'Dollhouse', price: 129.99, mrp: 179.99, image: 'static/images/dollhouse.jpg', description: 'Beautifully designed dollhouse for imaginative play.', category: 'Toys', deliveryDate: '28 August' },
    { id: 49, name: 'Outdoor Play Tent', price: 59.99, mrp: 79.99, image: 'static/images/playtent.jpg', description: 'Play tent for outdoor adventures.', category: 'Toys', deliveryDate: '6 September' },
    { id: 50, name: 'Musical Toy', price: 22.99, mrp: 29.99, image: 'static/images/musicaltoy.jpg', description: 'Toy that produces music and sound for enjoyment.', category: 'Toys', deliveryDate: '2 September' },
];


const cart = []; 
let loggedInUser = null;
const users = {};

// Function to filter products based on the search query
function filterProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    renderProducts(filteredProducts);
}

// Function to render category buttons
function renderCategories() {
    const categories = ['Electronics', 'Books', 'Fashion', 'Bags', 'Toys'];
    const categoryMenu = document.querySelector('.category-menu');
    categoryMenu.innerHTML = categories.map(category => 
        `<button class="category-button" onclick="filterByCategory('${category}')">${category}</button>`
    ).join('');
}

// Function to render all products
function showAllProducts() {
    renderProducts(products);
}

// Function to render products based on the provided list
function renderProducts(filteredProducts = products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = filteredProducts.map(product => `
        <div class="product" tabindex="0" onclick="showProductDetails(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="mrp">M.R.P: ₹${product.mrp.toFixed(2)}</p>
            <p>₹${product.price.toFixed(2)} (${(((product.mrp - product.price) / product.mrp) * 100).toFixed(0)}% off)</p>
            <p class="description">${product.description}</p>
            <p class="availability">Get it by Thursday 29 August</p>
            <button onclick="addToCart(${product.id}); event.stopPropagation();">Add to cart</button>
        </div>
    `).join('');
}

// Function to show product details in a modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="mrp">M.R.P: ₹${product.mrp.toFixed(2)}</p>
            <p class="price">₹${product.price.toFixed(2)} (${(((product.mrp - product.price) / product.mrp) * 100).toFixed(0)}% off)</p>
            <p class="rating">Rating: ${product.rating || 'No rating available'}</p>
            <p class="delivery-date">Get it by ${product.deliveryDate || 'Date not available'}</p>
            <p class="description">${product.description}</p>
        `;
        document.getElementById('product-modal').style.display = 'block';
    }
}

// Function to close the product modal
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Function to close the cart modal
function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Function to filter products by category
function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Initialize the page
function init() {
    renderCategories(); 
    renderProducts();

    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart.push(...JSON.parse(storedCart));
        updateCart();
    }

    document.getElementById('home-link').addEventListener('click', showAllProducts);
}


// Run the init function when the window loads
window.onload = init;

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart.`);
    }
}


// Function to change the quantity of a product in the cart
function changeQuantity(productId, amount) {
    const item = cart.find(cartItem => cartItem.id === productId);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            const index = cart.indexOf(item);
            if (index > -1) {
                cart.splice(index, 1);
            }
        }
        updateCart();
    }
}

// Function to update the cart modal
function updateCart() {
    const cartContent = document.getElementById('cart-content');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    cartContent.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="product-info">
                <img src="${item.image}" alt="${item.name}">
                <div class="info-container">
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                    </div>
                </div>
            </div>
            <div class="remove-container">
                <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
            </div>
        `;
        cartContent.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalPrice.textContent = `Total: ₹${total.toFixed(2)}`;
}


// Function to change the quantity of an item in the cart
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1); 
        updateCart();
        
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}


// Open cart modal
document.getElementById('my-cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'block';
});

// Close cart modal
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Optionally close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('cart-modal')) {
        document.getElementById('cart-modal').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackMessage = document.getElementById('feedback-message');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Feedback submitted:', { name, email, message });

            // Display success message
            feedbackMessage.classList.remove('hidden');

            // Optionally, reset the form
            feedbackForm.reset();
        });
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});

// Add event listener to the "Proceed to Checkout" button
document.addEventListener('DOMContentLoaded', function() {
    const proceedButton = document.getElementById('proceed-btn');
    const continueShoppingButton = document.getElementById('continue-shopping-btn');
    const paymentbutton=document.getElementById('paymentbtn');

    proceedButton .addEventListener('click', function() {
        window.location.href = '/checkout'; // Replace with the actual route if needed
    });

    continueShoppingButton.addEventListener('click', function() {
        window.location.href = '/shopping'; // Replace with the actual route if needed
    });
    
    paymentbutton.addEventListener('click',function(){
        window.location.herf='/payment';

    });
});


