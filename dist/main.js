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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");



console.log("Index is a go");
const setTabs = () => {
  let div = document.querySelector('#content');
  let home = document.createElement('label');
  let menu = document.createElement('label');
  let contact = document.createElement('label');
  home.id = ("Home");
  home.classList += "label";
  home.innerText = "Home";
  menu.id = ("Menu");
  menu.innerText = "Menu";
  menu.classList += "label";
  console.log(menu.classList);
  contact.id = ("Contact");
  contact.innerText = "Contact";
  contact.classList += "label";
  
  div.append(home, menu, contact);
};
setTabs();
const events = () => {
  const pageLoader = (pageToLoad) => {
    document.querySelector('#content').innerHTML = ""; //Clear #content div
    setTabs();// Re-append tabs
    switch(pageToLoad){
      case "Home": _modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
        console.log("home fire");
        events();
        break;
      case "Menu": _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
        console.log("menu fire");
        events();
        break;
      case "Contact": _modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"].initialize()
        console.log("contact fire");
        events();
        break;
    };
  };
  document.querySelector('#Home').addEventListener('click', function() {pageLoader(event.target.id);});
  document.querySelector('#Menu').addEventListener('click', function() {pageLoader(event.target.id);});
  document.querySelector('#Contact').addEventListener('click', function() {pageLoader(event.target.id);});
};
events();


_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].test();
_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].test();
_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"].test();
_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
//document.querySelector('#content').addEventListener('click', function() {console.log(event.target);});


//for tab switching logic
//element.addEventListener("click", function(){ alert("Hello World!"); });

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//main div
  //title div
  //section
    // form on one side, article on the other
    //form
      //name and email, subject and message
      //send button
    //article
      //div for description
      //contact info
      const Menu = (() => {
     

    
          const initialize = () => {
          
          };
          const test = () => {
            console.log('Contact is a go');
          };
          return {
           test,
           initialize
          };
        })();
        /* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Setup = (() => {
  
  const setImage = () => {
  let div = document.querySelector('#content');
  let img = document.createElement('img');
  img.src = "https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/lower-patio.jpg?itok=KGYP49fO";
  img.classList += "background-picture";
  console.log(img.classList);
  div.appendChild(img);
  };
  const getHeadline = () => {
  let headline = document.createElement('h2');
  headline.innerText = "The gem of the desert";
  return { headline };
  };
  const setHeadline = (headline) => {
    let div = document.querySelector('#content');
    div.append(headline.headline);
    };
  const getIntro = () => {
    let intro = document.createElement('h4');
    intro.innerText = "Welcome to our wonderful restaurant! You will be amazed at our food and dazzled by our service";
    return { intro };
  };
  const setIntro = (intro) => {
    let div = document.querySelector('#content');
    div.append(intro.intro);
  };
    const getIntro2 = () => {
      let intro2 = document.createElement('h4');
      intro2.innerText = "Just give us a chance to impress!";
      return { intro2 };
    };
    const setIntro2 = (intro2) => {
      let div = document.querySelector('#content');
      div.append(intro2.intro2);
    };
    const initialize = () => {
      setImage();
      setHeadline(getHeadline())
      setIntro(getIntro());
      setIntro2(getIntro2());
    };
    const test = () => {
      console.log('Home is a go');
    };
    return {
     test,
     initialize
    };
  })();
  /* harmony default export */ __webpack_exports__["default"] = (Setup);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Menu = (() => {
  // div container to append to #content
    //sections for salads/pastas/paninis
      //div for title
        //h3
      //row for every two menu items
        //article for menu item 
          //picture
          //div for description
            //div for title
              //h5 for title content
            //p for description of menu item
  //call class to setup content easily
    //parameters: section name
      // item picture
      //item name
      //item price
      //item description

  const setSalads = () => {

  };
    const initialize = () => {
    };
    const test = () => {
      console.log('Menu is a go');
    };
    return {
     test,
     initialize
    };
  })();
  /* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTtBQUNNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsY0FBYztBQUNkO0FBQ0EsbUJBQW1CLHFEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSw2QkFBNkI7QUFDckcsd0VBQXdFLDZCQUE2QjtBQUNyRywyRUFBMkUsNkJBQTZCO0FBQ3hHO0FBQ0E7OztBQUdBLHFEQUFJO0FBQ0oscURBQUk7QUFDSix3REFBTztBQUNQLHFEQUFJO0FBQ0osMkVBQTJFLDJCQUEyQjs7O0FBR3RHO0FBQ0EsK0NBQStDLHVCQUF1QixFQUFFLEU7Ozs7Ozs7Ozs7OztBQ3pEeEU7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUF1QixtRUFBSSxFOzs7Ozs7Ozs7Ozs7QUN6QjNCO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQWlCLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ25EdEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBaUIsbUVBQUksRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL21vZHVsZXMvY29udGFjdCc7XG5jb25zb2xlLmxvZyhcIkluZGV4IGlzIGEgZ29cIik7XG5jb25zdCBzZXRUYWJzID0gKCkgPT4ge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgaG9tZS5pZCA9IChcIkhvbWVcIik7XG4gIGhvbWUuY2xhc3NMaXN0ICs9IFwibGFiZWxcIjtcbiAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgbWVudS5pZCA9IChcIk1lbnVcIik7XG4gIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gIG1lbnUuY2xhc3NMaXN0ICs9IFwibGFiZWxcIjtcbiAgY29uc29sZS5sb2cobWVudS5jbGFzc0xpc3QpO1xuICBjb250YWN0LmlkID0gKFwiQ29udGFjdFwiKTtcbiAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdC5jbGFzc0xpc3QgKz0gXCJsYWJlbFwiO1xuICBcbiAgZGl2LmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbn07XG5zZXRUYWJzKCk7XG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VMb2FkZXIgPSAocGFnZVRvTG9hZCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjsgLy9DbGVhciAjY29udGVudCBkaXZcbiAgICBzZXRUYWJzKCk7Ly8gUmUtYXBwZW5kIHRhYnNcbiAgICBzd2l0Y2gocGFnZVRvTG9hZCl7XG4gICAgICBjYXNlIFwiSG9tZVwiOiBIb21lLmluaXRpYWxpemUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJob21lIGZpcmVcIik7XG4gICAgICAgIGV2ZW50cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNZW51XCI6IE1lbnUuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgZmlyZVwiKTtcbiAgICAgICAgZXZlbnRzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkNvbnRhY3RcIjogQ29udGFjdC5pbml0aWFsaXplKClcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IGZpcmVcIik7XG4gICAgICAgIGV2ZW50cygpO1xuICAgICAgICBicmVhaztcbiAgICB9O1xuICB9O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjSG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7cGFnZUxvYWRlcihldmVudC50YXJnZXQuaWQpO30pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7cGFnZUxvYWRlcihldmVudC50YXJnZXQuaWQpO30pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7cGFnZUxvYWRlcihldmVudC50YXJnZXQuaWQpO30pO1xufTtcbmV2ZW50cygpO1xuXG5cbkhvbWUudGVzdCgpO1xuTWVudS50ZXN0KCk7XG5Db250YWN0LnRlc3QoKTtcbkhvbWUuaW5pdGlhbGl6ZSgpO1xuLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTt9KTtcblxuXG4vL2ZvciB0YWIgc3dpdGNoaW5nIGxvZ2ljXG4vL2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7IGFsZXJ0KFwiSGVsbG8gV29ybGQhXCIpOyB9KTsiLCIvL21haW4gZGl2XG4gIC8vdGl0bGUgZGl2XG4gIC8vc2VjdGlvblxuICAgIC8vIGZvcm0gb24gb25lIHNpZGUsIGFydGljbGUgb24gdGhlIG90aGVyXG4gICAgLy9mb3JtXG4gICAgICAvL25hbWUgYW5kIGVtYWlsLCBzdWJqZWN0IGFuZCBtZXNzYWdlXG4gICAgICAvL3NlbmQgYnV0dG9uXG4gICAgLy9hcnRpY2xlXG4gICAgICAvL2RpdiBmb3IgZGVzY3JpcHRpb25cbiAgICAgIC8vY29udGFjdCBpbmZvXG4gICAgICBjb25zdCBNZW51ID0gKCgpID0+IHtcbiAgICAgXG5cbiAgICBcbiAgICAgICAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdGVzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250YWN0IGlzIGEgZ28nKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHRlc3QsXG4gICAgICAgICAgIGluaXRpYWxpemVcbiAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuICAgICAgICBleHBvcnQgZGVmYXVsdCBNZW51OyIsImNvbnN0IFNldHVwID0gKCgpID0+IHtcbiAgXG4gIGNvbnN0IHNldEltYWdlID0gKCkgPT4ge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gXCJodHRwczovL3d3dy5kaXNjb3Zlcmxvc2FuZ2VsZXMuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvc3R5bGVzL2hlcm8vcHVibGljL2ltYWdlcy8yMDE5LTAxL2xvd2VyLXBhdGlvLmpwZz9pdG9rPUtHWVA0OWZPXCI7XG4gIGltZy5jbGFzc0xpc3QgKz0gXCJiYWNrZ3JvdW5kLXBpY3R1cmVcIjtcbiAgY29uc29sZS5sb2coaW1nLmNsYXNzTGlzdCk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICB9O1xuICBjb25zdCBnZXRIZWFkbGluZSA9ICgpID0+IHtcbiAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUaGUgZ2VtIG9mIHRoZSBkZXNlcnRcIjtcbiAgcmV0dXJuIHsgaGVhZGxpbmUgfTtcbiAgfTtcbiAgY29uc3Qgc2V0SGVhZGxpbmUgPSAoaGVhZGxpbmUpID0+IHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkaXYuYXBwZW5kKGhlYWRsaW5lLmhlYWRsaW5lKTtcbiAgICB9O1xuICBjb25zdCBnZXRJbnRybyA9ICgpID0+IHtcbiAgICBsZXQgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGludHJvLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBvdXIgd29uZGVyZnVsIHJlc3RhdXJhbnQhIFlvdSB3aWxsIGJlIGFtYXplZCBhdCBvdXIgZm9vZCBhbmQgZGF6emxlZCBieSBvdXIgc2VydmljZVwiO1xuICAgIHJldHVybiB7IGludHJvIH07XG4gIH07XG4gIGNvbnN0IHNldEludHJvID0gKGludHJvKSA9PiB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgZGl2LmFwcGVuZChpbnRyby5pbnRybyk7XG4gIH07XG4gICAgY29uc3QgZ2V0SW50cm8yID0gKCkgPT4ge1xuICAgICAgbGV0IGludHJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBpbnRybzIuaW5uZXJUZXh0ID0gXCJKdXN0IGdpdmUgdXMgYSBjaGFuY2UgdG8gaW1wcmVzcyFcIjtcbiAgICAgIHJldHVybiB7IGludHJvMiB9O1xuICAgIH07XG4gICAgY29uc3Qgc2V0SW50cm8yID0gKGludHJvMikgPT4ge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICBkaXYuYXBwZW5kKGludHJvMi5pbnRybzIpO1xuICAgIH07XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgIHNldEltYWdlKCk7XG4gICAgICBzZXRIZWFkbGluZShnZXRIZWFkbGluZSgpKVxuICAgICAgc2V0SW50cm8oZ2V0SW50cm8oKSk7XG4gICAgICBzZXRJbnRybzIoZ2V0SW50cm8yKCkpO1xuICAgIH07XG4gICAgY29uc3QgdGVzdCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdIb21lIGlzIGEgZ28nKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgIHRlc3QsXG4gICAgIGluaXRpYWxpemVcbiAgICB9O1xuICB9KSgpO1xuICBleHBvcnQgZGVmYXVsdCBTZXR1cDsiLCJjb25zdCBNZW51ID0gKCgpID0+IHtcbiAgLy8gZGl2IGNvbnRhaW5lciB0byBhcHBlbmQgdG8gI2NvbnRlbnRcbiAgICAvL3NlY3Rpb25zIGZvciBzYWxhZHMvcGFzdGFzL3BhbmluaXNcbiAgICAgIC8vZGl2IGZvciB0aXRsZVxuICAgICAgICAvL2gzXG4gICAgICAvL3JvdyBmb3IgZXZlcnkgdHdvIG1lbnUgaXRlbXNcbiAgICAgICAgLy9hcnRpY2xlIGZvciBtZW51IGl0ZW0gXG4gICAgICAgICAgLy9waWN0dXJlXG4gICAgICAgICAgLy9kaXYgZm9yIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAvL2RpdiBmb3IgdGl0bGVcbiAgICAgICAgICAgICAgLy9oNSBmb3IgdGl0bGUgY29udGVudFxuICAgICAgICAgICAgLy9wIGZvciBkZXNjcmlwdGlvbiBvZiBtZW51IGl0ZW1cbiAgLy9jYWxsIGNsYXNzIHRvIHNldHVwIGNvbnRlbnQgZWFzaWx5XG4gICAgLy9wYXJhbWV0ZXJzOiBzZWN0aW9uIG5hbWVcbiAgICAgIC8vIGl0ZW0gcGljdHVyZVxuICAgICAgLy9pdGVtIG5hbWVcbiAgICAgIC8vaXRlbSBwcmljZVxuICAgICAgLy9pdGVtIGRlc2NyaXB0aW9uXG5cbiAgY29uc3Qgc2V0U2FsYWRzID0gKCkgPT4ge1xuXG4gIH07XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICB9O1xuICAgIGNvbnN0IHRlc3QgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTWVudSBpcyBhIGdvJyk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICB0ZXN0LFxuICAgICBpbml0aWFsaXplXG4gICAgfTtcbiAgfSkoKTtcbiAgZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9