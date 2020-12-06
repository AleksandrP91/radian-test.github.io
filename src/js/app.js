import menuBurger from './menu';
import slider from './slider';
// import buttonClick from './buttonClick';
import tabs from './tabs';
import accordion from './accordion';
import modalWindow from './modal'

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  menuBurger();
  slider();
  // buttonClick();
  tabs()
  accordion();
  modalWindow();
});