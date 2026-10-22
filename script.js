const hamburgerButton = document.querySelector(".hamburgerButton");
const nav = document.querySelector("nav");

hamburgerButton.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("navIsOpen");
    hamburgerButton.setAttribute("aria-expanded", isOpen);
    hamburgerButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
