let count = 0;

function increaseCart() {
    count++;
    document.getElementById('cart-count').textContent = count;

    if (count >= 100) {
        window.location.href = 'login.html';
    }
}