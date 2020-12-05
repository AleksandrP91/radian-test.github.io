const accordion = function () {
  const arrow = document.querySelectorAll('.accordion__wrapp');

  for (let item of arrow) {
    item.addEventListener('click', function () {
      // this.classList.toggle('active');
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for (let elem of arrow) {
          elem.classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }
};

export default accordion;
