const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const spacer = document.querySelector(".spacer");


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    spacer.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});