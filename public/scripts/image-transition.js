let sources = ["img/hero0.jpg", "img/hero1.jpg", "img/hero2.jpg", "img/hero3.jpg", "img/hero4.jpg"];
let idx = 0;

function transition() {
    let newImage = document.createElement("img");
    newImage.src = sources[idx];

    newImage.setAttribute("id", "transition-image-" + ((idx + 1) % 5));
    newImage.setAttribute("class", "hero-img");
    console.log(idx);

    topHero = document.getElementById("top-hero");

    topHero.insertBefore(newImage, topHero.childNodes[0]);

    newImage.style.opacity = 0;
    newImage.style.transition = "opacity 4s";

    oldImage = document.getElementById("transition-image-" + idx);
    oldImage.style.transition = "opacity 4s";

    newImage.onload = function () {
        oldImage.style.opacity = 0;
        newImage.style.opacity = 1;
        setTimeout(function() {
            topHero.removeChild(oldImage);
        }, 4000);
        idx = (idx + 1) % 5;
    }
}

function transition1() {
    idx = (idx + 1) % 2;
    let image = document.getElementById("transition-image");
    image.src = sources[idx];
    image.style.transition = null;
    image.style.opacity = 0;
    image.style.transition = "opacity 1s";
    image.style.opacity = 1;
}

function transition2() {
    let image = document.getElementById("transition-image");
    image.style.opacity = 0;
    image.style.transition = "opacity 5s";
    image.style.opacity = 1;
    image.style.opacity = 0;
}

//transition2();

setInterval(transition, 8000);
