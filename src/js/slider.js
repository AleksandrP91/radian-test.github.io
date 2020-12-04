const slider = function () {
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  // const slidesWrapper = document.querySelectorAll('.main__block-wrapp');

  let index = 0;

  // function active slide
  const activeSlide = function (n) {
    for (let slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
  };

  // function active dots
  const activeDot = function (n) {
    for (let dot of dots) {
      dot.classList.remove('active');
    }
    dots[n].classList.add('active');
  };

  const currentSlide = function (i) {
    activeSlide(i);
    activeDot(i);
  };

  // next slide
  const nextSlide = function () {
    if (index == slides.length - 1) {
      index = 0;
      currentSlide(index);
    } else {
      index++;
      currentSlide(index);
    }
  };
  arrowRight.addEventListener('click', nextSlide);

  // prev slide
  const prevSlide = function () {
    if (index == 0) {
      index = slides.length - 1;
      currentSlide(index);
    } else {
      index--;
      currentSlide(index);
    }
  };
  arrowLeft.addEventListener('click', prevSlide);

  // переключение dots
  dots.forEach(function (item, indexDot) {
    item.addEventListener('click', function () {
      index = indexDot;
      currentSlide(index);
      // clearInterval(interval);
    });
  });

  // setinterval
  // const interval = setInterval(nextSlide, 5000);
};

export default slider;
