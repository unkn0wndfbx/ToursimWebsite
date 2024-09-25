// slider.js
function initSlider(sliderClass) {
    const sliderWrapper = document.querySelector(`.${sliderClass} .slider_wrapper`);
    const dots = document.querySelectorAll(`.${sliderClass} .nav-dot`);
    const totalSlides = dots.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }, 7000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            updateSlider();
            stopAutoSlide();
            startAutoSlide();
        });
    });

    updateSlider();
    startAutoSlide();
}

// Initialisation des deux sliders
initSlider('slider1');
initSlider('slider2');