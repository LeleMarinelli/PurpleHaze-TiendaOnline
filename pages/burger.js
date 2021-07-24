const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("menu_visible");

    if (menu.classList.contains("menu_visible")) {
        toggle.setAttribute("aria-label", "Cerrar menu");
    } else {
        toggle.setAttribute("aria-label", "Abrir menu");
    }
});


