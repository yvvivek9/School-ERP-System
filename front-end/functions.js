
function nav_bar() {
    if (document.getElementById("nav_menu").style.width === "210px") {
        document.getElementById("nav_menu").style.width = "0px";
        $(".nav_menu_link").fadeOut(50);
    }
    else {
        document.getElementById("nav_menu").style.width = "210px";
        $(".nav_menu_link").delay(500).fadeIn(500);
    }
}

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 3000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = "dot";
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    $(slides[slideIndex - 1]).fadeIn(800);
    dots[slideIndex - 1].className = "dot active";
}

function logout() {
    document.getElementById("logout").submit();
}




