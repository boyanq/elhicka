let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.opacity = 1;
}

// Set the time for slide changes
const slideInterval = setInterval(nextSlide, 3000);

// Optional: Add event listeners for touch events on mobile devices or arrow keys for navigation
