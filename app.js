const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const spacer = document.querySelector(".spacer");
var toHide = document.querySelectorAll("#viewdesk");
var count = 0;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    spacer.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    if (count%2 == 1){
        count++;
        toHide[0].classList.remove('hidden');
    }else {
        toHide[0].classList.add('hidden');
        count++;
    }
    console.log(toHide[0].classList);
});