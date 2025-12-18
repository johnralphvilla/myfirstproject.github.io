
const sliders = {
    men: { index: 0 },
    women: { index: 0 }
};

function nextSlide(type) {
    moveSlide(type, 1);
}

function prevSlide(type) {
    moveSlide(type, -1);
}

function moveSlide(type, direction) {
    const slider = document.querySelector(`[data-slider="${type}"]`);
    const slides = slider.querySelector('.slides');
    const totalSlides = slider.querySelectorAll('.slide').length;

    sliders[type].index += direction;

    if (sliders[type].index >= totalSlides) sliders[type].index = 0;
    if (sliders[type].index < 0) sliders[type].index = totalSlides - 1;

    slides.style.transform =
        `translateX(-${sliders[type].index * 260}px)`;
}

