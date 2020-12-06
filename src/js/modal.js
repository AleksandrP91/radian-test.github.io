const modalWindow = function() {
  const modal = document.querySelector('.modal__window');
  const storitve = document.querySelector('#storitve');

  storitve.addEventListener('click', function () {
    modal.classList.toggle('active');
  })
}

export default modalWindow;