document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Cerrar todos los elementos del acordeón
            accordionButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove("active");
                    btn.nextElementSibling.style.display = "none";
                }
            });

            // Alternar el elemento actual
            this.classList.toggle("active");

            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
