
// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===============================
// Hero Slider
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

// Show Slide
function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Next Slide
function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// Previous Slide
function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

// Auto Slide
function startSlider() {

    autoSlide = setInterval(() => {
        nextSlide();
    }, 5000);

}

// Stop Slider
function stopSlider() {

    clearInterval(autoSlide);

}

// Next Button
nextBtn.addEventListener("click", () => {

    nextSlide();

    stopSlider();

    startSlider();

});

// Previous Button
prevBtn.addEventListener("click", () => {

    prevSlide();

    stopSlider();

    startSlider();

});

// Dot Click
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        stopSlider();

        startSlider();

    });

});

// Mouse Hover Pause
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", stopSlider);

slider.addEventListener("mouseleave", startSlider);

// Start Slider
startSlider();
