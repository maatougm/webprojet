// ... Previous JavaScript (for header, etc.) ...

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".est-carousel-slide");
const prevButton = document.querySelector(".est-carousel-prev");
const nextButton = document.querySelector(".est-carousel-next");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance the carousel (optional)
let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Event listeners for navigation buttons
nextButton.addEventListener("click", () => {
    nextSlide();
    clearInterval(slideInterval); // Reset the interval on manual click
    slideInterval = setInterval(nextSlide, 5000);
});

prevButton.addEventListener("click", () => {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
});

// Initialize the first slide
showSlide(currentSlide);