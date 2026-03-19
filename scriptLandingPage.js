//O JavaScript encontra os elementos no HTML
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const botoesMobile = document.getElementById("botoes-mobile")

// Fica esperando um clique no botão ☰
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    botoesMobile.classList.toggle("active");
})

document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) &&
        !navLinks.contains(event.target) &&
        !botoesMobile.contains(event.target)) {
            navLinks.classList.remove("active");
            botoesMobile.classList.remove("active");
        }
    });
    
