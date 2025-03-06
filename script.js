
document.addEventListener("DOMContentLoaded", function () {
    const buyBtns = document.querySelectorAll(".buy-btn");
    buyBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            alert("Product added to cart!");
        });
    });
});
