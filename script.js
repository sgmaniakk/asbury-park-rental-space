var carouselElement = document.getElementById('carouselExampleIndicators');

function rotateCarousel() {
  carouselElement.classList.add('carousel-pause');
  setTimeout(function () {
    carouselElement.classList.remove('carousel-pause');
    var carousel = bootstrap.Carousel.getInstance(carouselElement);
    carousel.next();
  }, 3000);
}

carouselElement.addEventListener('mouseenter', function () {
  clearInterval(intervalId);
  carouselElement.classList.add('carousel-pause');
});

carouselElement.addEventListener('mouseleave', function () {
  carouselElement.classList.remove('carousel-pause');
  rotateCarousel();
});

var intervalId = setInterval(rotateCarousel, 3000);
