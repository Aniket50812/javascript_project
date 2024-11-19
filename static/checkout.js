document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');
    const paymentMethodSelect = document.getElementById('payment-method');
    const shippingCharges = 40;

    // Function to calculate order totals
    function calculateOrderTotals(cart) {
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const grandTotal = totalAmount + shippingCharges;
        return { totalAmount, grandTotal };
    }

    // Function to display order totals
    function displayOrderTotals() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Cart Data:', cart);

        if (cart.length === 0) {
           console.log('Cart is empty or data is incorrect');
            return;
        }

        const { totalAmount, grandTotal } = calculateOrderTotals(cart);
        console.log('Calculated Totals:', { totalAmount, grandTotal });

        const orderTotalElement = document.getElementById('order-total');
        const grandTotalElement = document.getElementById('grand-total');

        if (orderTotalElement && grandTotalElement) {
            orderTotalElement.textContent = `₹${totalAmount.toFixed(2)}`;
            grandTotalElement.textContent = `₹${grandTotal.toFixed(2)}`;
        } else {
            console.warn('Total amount elements not found');
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const shippingAddress = {
            address1: document.getElementById('address1').value,
            address2: document.getElementById('address2').value,
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value
        };

        // Store shipping address and order details
        sessionStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));

        const paymentMethod = paymentMethodSelect.value;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const { totalAmount, grandTotal } = calculateOrderTotals(cart);

        const orderDetails = {
            cart: cart,
            totalAmount: totalAmount,
            shippingCharges: shippingCharges,
            grandTotal: grandTotal,
            paymentMethod: paymentMethod
        };

        sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        // Redirect to payment page
        window.location.href = `payment.html?method=${encodeURIComponent(paymentMethod)}`;
    });

    // Display order totals on checkout page
    displayOrderTotals();
});
