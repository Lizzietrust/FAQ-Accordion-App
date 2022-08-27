const accordions = document.querySelectorAll(".accordion-main");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    });
});