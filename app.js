const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const hidden = document.querySelector(".hidden");



hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    spacer.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
   hidden.classList.toggle("close");
});