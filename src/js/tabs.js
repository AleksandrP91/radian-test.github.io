const tabs = function () {
  const tabNav = document.querySelectorAll('.tab-nav');
  const tabBlock = document.querySelectorAll('.tab-block');

  tabNav.forEach(function (elem) {
    elem.addEventListener('click', activeTab);
  });

  function activeTab() {
    tabNav.forEach(function (elem) {
      elem.classList.remove('active');
    });
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');

    activeTabBlock(tabName);
  }

  function activeTabBlock(tabName) {
    tabBlock.forEach(function (item) {
      if (item.classList.contains(tabName)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
};

export default tabs;
