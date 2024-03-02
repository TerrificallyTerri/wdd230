document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slideimage');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? '1' : '0';
        });
    }

    function nextSlide() {
        showSlide(currentIndex);
        currentIndex = (currentIndex + 1) % slides.length;
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)

    // Initially show the first slide
    showSlide(currentIndex);
});
