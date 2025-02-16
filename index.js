/* window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY > viewportHeight * 0.1 && scrollY < viewportHeight * 0.1) {
        header.style.transform = "scale(1) translateY(0)";
        console.log("1");
    } else if (scrollY > viewportHeight * 0.5) {
        header.style.transform = "scale(0) translateY(-20rem)";
        console.log("2");
    }
}); */

/* document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".titleHeader");
    let index = 0;

    function toggleHeaders() {
        headers.forEach((header, i) => {
            if (i === index) {
                header.classList.add("show");
                header.classList.remove("hidden");
            } else {
                header.classList.add("hidden");
                header.classList.remove("show");
            }
        });

        index = (index + 1) % headers.length;
    }

    // Muestra el primer título inmediatamente y luego alterna cada 3 segundos
    toggleHeaders();
    setInterval(toggleHeaders, 3000);
}); */