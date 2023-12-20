let currentSlide = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  if (index >= totalSlides) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides - 1;
  }

  currentSlide = index;

  const transformValue = -index * 100 + '%';
  carousel.style.transform = 'translateX(' + transformValue + ')';
}

setInterval(function() {
  showSlide(currentSlide + 1);
}, 5000);