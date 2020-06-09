window.onresize = function () {
    navTransition();
};

window.onscroll = function () {
    navScroll();
};

function navScroll() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    $("#logo").toggleClass('scrolled', $(this).scrollTop() > 50);
    $("#logo-extended").toggleClass('scrolled', $(this).scrollTop() > 50);
    $("#logo-icon").toggleClass('scrolled', $(this).scrollTop() > 50);
    $("#logo-extended-m").toggleClass('scrolled', $(this).scrollTop() > 50);
}

var hoverFalse = window.matchMedia("(any-hover:none)");
hoverExists(hoverFalse); // Call listener function at run time
hoverFalse.addListener(hoverExists); // Attach listener function on state changes

function hoverExists(hoverFalse) {
    if (hoverFalse.matches) { // If media query matches
        document.querySelector("#donateButton").href = "JavaScript:setTimeout(loadUrl,40)";
    } else {
        document.querySelector("#donateButton").href = "https://charity.gofundme.com/o/en/campaign/ev3everywhere1/ev3everywhere";
    }
}


function loadUrl() {
    window.location.href = "https://charity.gofundme.com/o/en/campaign/ev3everywhere1/ev3everywhere";
}

function navTransition() {
    $('#left_modal_sm').modal('hide');
    $('body').removeClass('modal-open');
}