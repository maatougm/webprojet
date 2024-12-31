let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Attach event listeners for manual navigation
document.querySelector('.carousel .next').addEventListener('click', nextSlide);
document.querySelector('.carousel .prev').addEventListener('click', prevSlide);

// Menu toggle functionality for mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');

menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
});
