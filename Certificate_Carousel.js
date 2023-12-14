let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const carousel = document.querySelector('.carousel');

showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
}

// Touch support for mobile devices
let touchStartX = null;
carousel.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

carousel.addEventListener('touchend', (event) => {
  if (touchStartX === null) {
    return;
  }

  const touchEndX = event.changedTouches[0].clientX;
  const touchDiff = touchEndX - touchStartX;

  if (touchDiff > 50) {
    changeSlide(-1); // Swipe right, move to the previous slide
  } else if (touchDiff < -50) {
    changeSlide(1); // Swipe left, move to the next slide
  }

  touchStartX = null;
});
