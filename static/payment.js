document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentMethod = urlParams.get('method');
    const paymentSection = document.getElementById('payment-section');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');
    const successMessage = document.getElementById('order-success-message');
    const expirationMessage = document.getElementById('qr-expiration-message');

    if (paymentMethod === 'upi') {
        // Display QR code for UPI payment
        paymentSection.innerHTML = `
            <h2>UPI Payment</h2>
            <p>Scan the QR code to complete your payment:</p>
            <img id="upi-qr-code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=onlinestore@upi" alt="UPI QR Code">
            <p>UPI ID: onlinestore@upi</p>
        `;

        // Set a timer to expire the QR code after 6 seconds
        setTimeout(() => {
            document.getElementById('upi-qr-code').style.display = 'none';
            expirationMessage.style.display = 'block';
        }, 6000); // 6 seconds

    } else if (paymentMethod === 'cod') {
        // Retrieve and display address from sessionStorage
        const address = JSON.parse(sessionStorage.getItem('shippingAddress'));
        paymentSection.innerHTML = `
            <h2>Cash on Delivery</h2>
            <p>Please confirm your shipping address:</p>
            <div id="shipping-address">
                <p>Full Name: ${address.fullName}</p>
                <p>Email: ${address.email}</p>
                <p>Mobile Number: ${address.mobile}</p>
                <p>Address 1: ${address.address1}</p>
                <p>Address 2: ${address.address2 || 'N/A'}</p>
            </div>
        `;
        confirmOrderBtn.style.display = 'block';

        confirmOrderBtn.addEventListener('click', function() {
            // Show order confirmation message
            successMessage.style.display = 'block';
            confirmOrderBtn.style.display = 'none'; // Hide confirm button after order is confirmed
            setTimeout(() => {
                window.location.href = 'order-confirmation.html'; // Redirect to the order confirmation page
            }, 3000); // Redirect after 3 seconds
        });
    } else {
        // Handle other payment methods or invalid cases
        paymentSection.innerHTML = '<p>Invalid payment method.</p>';
    }
});
