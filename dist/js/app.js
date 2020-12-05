/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (accordion);


/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./js/menu.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./js/slider.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./js/tabs.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./js/accordion.js");


// import buttonClick from './buttonClick';



window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  Object(_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // buttonClick();
  Object(_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])()
  Object(_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menuBurger = function () {
  const menu = document.querySelector('.menu__burger');
  const menuActive = document.querySelector('.burger');
  const menuPopup = document.querySelector('.menu__popup');

  menu.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  menu.addEventListener('click', function () {
    menuActive.classList.toggle('active');
  });

  menu.addEventListener('click', function () {
    menuPopup.classList.toggle('active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menuBurger);


/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (slider);


/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (tabs);


/***/ }),

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./js/app.js ./scss/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */"./js/app.js");
module.exports = __webpack_require__(/*! ./scss/app.scss */"./scss/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90YWJzLmpzIiwid2VicGFjazovLy8uL3Njc3MvYXBwLnNjc3M/NTA4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0Y7QUFDOUI7QUFDMEI7QUFDVTs7QUFFcEM7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFNO0FBQ1I7QUFDQSxFQUFFLHFEQUFJO0FBQ04sRUFBRSwwREFBUztBQUNYLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQjFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuRXRCO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7OztBQzdCcEIsdUMiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgYWNjb3JkaW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX3dyYXBwJyk7XG5cbiAgZm9yIChsZXQgaXRlbSBvZiBhcnJvdykge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBhcnJvdykge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWNjb3JkaW9uO1xuIiwiaW1wb3J0IG1lbnVCdXJnZXIgZnJvbSAnLi9tZW51JztcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuLy8gaW1wb3J0IGJ1dHRvbkNsaWNrIGZyb20gJy4vYnV0dG9uQ2xpY2snO1xuaW1wb3J0IHRhYnMgZnJvbSAnLi90YWJzJztcbmltcG9ydCBhY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBtZW51QnVyZ2VyKCk7XG4gIHNsaWRlcigpO1xuICAvLyBidXR0b25DbGljaygpO1xuICB0YWJzKClcbiAgYWNjb3JkaW9uKCk7XG59KTsiLCJjb25zdCBtZW51QnVyZ2VyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J1cmdlcicpO1xuICBjb25zdCBtZW51QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuICBjb25zdCBtZW51UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fcG9wdXAnKTtcblxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH0pO1xuXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbWVudUFjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfSk7XG5cbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtZW51UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUJ1cmdlcjtcbiIsImNvbnN0IHNsaWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcbiAgY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpO1xuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKTtcbiAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKTtcbiAgLy8gY29uc3Qgc2xpZGVzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluX19ibG9jay13cmFwcCcpO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgLy8gZnVuY3Rpb24gYWN0aXZlIHNsaWRlXG4gIGNvbnN0IGFjdGl2ZVNsaWRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKGxldCBzbGlkZSBvZiBzbGlkZXMpIHtcbiAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBzbGlkZXNbbl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgLy8gZnVuY3Rpb24gYWN0aXZlIGRvdHNcbiAgY29uc3QgYWN0aXZlRG90ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKGxldCBkb3Qgb2YgZG90cykge1xuICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBkb3RzW25dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgYWN0aXZlU2xpZGUoaSk7XG4gICAgYWN0aXZlRG90KGkpO1xuICB9O1xuXG4gIC8vIG5leHQgc2xpZGVcbiAgY29uc3QgbmV4dFNsaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbmRleCA9PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgaW5kZXggPSAwO1xuICAgICAgY3VycmVudFNsaWRlKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXgrKztcbiAgICAgIGN1cnJlbnRTbGlkZShpbmRleCk7XG4gICAgfVxuICB9O1xuICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAvLyBwcmV2IHNsaWRlXG4gIGNvbnN0IHByZXZTbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgIGN1cnJlbnRTbGlkZShpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBjdXJyZW50U2xpZGUoaW5kZXgpO1xuICAgIH1cbiAgfTtcbiAgYXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKTtcblxuICAvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUgZG90c1xuICBkb3RzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4RG90KSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGluZGV4ID0gaW5kZXhEb3Q7XG4gICAgICBjdXJyZW50U2xpZGUoaW5kZXgpO1xuICAgICAgLy8gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHNldGludGVydmFsXG4gIC8vIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dFNsaWRlLCA1MDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjtcbiIsImNvbnN0IHRhYnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItbmF2Jyk7XG4gIGNvbnN0IHRhYkJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1ibG9jaycpO1xuXG4gIHRhYk5hdi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2ZVRhYik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFjdGl2ZVRhYigpIHtcbiAgICB0YWJOYXYuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGxldCB0YWJOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyk7XG5cbiAgICBhY3RpdmVUYWJCbG9jayh0YWJOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2ZVRhYkJsb2NrKHRhYk5hbWUpIHtcbiAgICB0YWJCbG9jay5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnModGFiTmFtZSkpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhYnM7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9