const button = document.getElementById("giftButton");
const coupon = document.getElementById("coupon");

button.addEventListener("click", () => {

    coupon.classList.remove("hidden");

    coupon.scrollIntoView({
        behavior: "smooth"
    });

    button.innerHTML = "❤️ Espero que te guste ❤️";

});