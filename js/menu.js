const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector("#menu-links");

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuLinks.hidden = isOpen;

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
});