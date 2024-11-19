document.addEventListener('DOMContentLoaded', function() {
    const orderSummaryDiv = document.getElementById('order-summary');
    
    // Check if the element exists
    if (!orderSummaryDiv) {
        console.error('Element with ID "order-summary" not found.');
        return;
    }

    // Retrieve order details and shipping address from sessionStorage
    const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));
    const address = JSON.parse(sessionStorage.getItem('shippingAddress'));

    // Debugging: Log the retrieved data
    console.log('Order Details:', orderDetails);
    console.log('Shipping Address:', address);

    if (orderDetails && address) {
        const { cart, totalAmount, shippingCharges, grandTotal, paymentMethod } = orderDetails;

        // Generate HTML for cart items
        let cartHtml = '';
        cart.forEach(item => {
            cartHtml += `
                <div class="order-item">
                    <p><strong>Product:</strong> ${item.name}</p>
                    <p><strong>Price:</strong> ₹${item.price.toFixed(2)}</p>
                    <p><strong>Quantity:</strong> ${item.quantity}</p>
                    <p><strong>Total:</strong> ₹${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            `;
        });

        // Create the full order summary HTML
        orderSummaryDiv.innerHTML = `
            <h2>Order Summary</h2>
            ${cartHtml}
            <p><strong>Total Amount:</strong> ₹${totalAmount.toFixed(2)}</p>
            <p><strong>Shipping Charges:</strong> ₹${shippingCharges.toFixed(2)}</p>
            <p><strong>Grand Total:</strong> ₹${grandTotal.toFixed(2)}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI'}</p>
            <h3>Shipping Address</h3>
            <p><strong>Full Name:</strong> ${address.fullName}</p>
            <p><strong>Email:</strong> ${address.email}</p>
            <p><strong>Mobile Number:</strong> ${address.mobile}</p>
            <p><strong>Address 1:</strong> ${address.address1}</p>
            <p><strong>Address 2:</strong> ${address.address2 || 'N/A'}</p>
        `;

        // Clear sessionStorage after displaying order summary
        sessionStorage.removeItem('orderDetails');
        sessionStorage.removeItem('shippingAddress');
    } else {
        orderSummaryDiv.innerHTML = '<p>No order details available.</p>';
    }
});
