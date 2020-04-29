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
const setTabs = (() => {
  let div = document.querySelector('#content');
  let home = document.createElement('label');
  let menu = document.createElement('label');
  let contact = document.createElement('label');
  home.classList += "label";
  home.innerText = "Home";
  menu.innerText = "Menu";
  menu.classList += "label";
  console.log(menu.classList);
  contact.innerText = "Contact";
  contact.classList += "label";
  home.addEventListener('click', function (event) {
    document.querySelector('#content').innerHTML = "";
    setTabs();
    _modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
  });
  menu.addEventListener('click', function (event) {
    document.querySelector('#content').innerHTML = "";
    setTabs();
    _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
  });
  contact.addEventListener('click', function (event) {
    document.querySelector('#content').innerHTML = "";
    setTabs();
    _modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"].initialize();
  });
  div.append(home, menu, contact);
})();
_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].test();
_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].test();
_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"].test();
_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDRDtBQUNNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBSztBQUNULEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFJO0FBQ1IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU87QUFDWCxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0QscURBQUs7QUFDTCxxREFBSTtBQUNKLHdEQUFPO0FBQ1AscURBQUs7OztBQUdMO0FBQ0EsK0NBQStDLHVCQUF1QixFQUFFLEU7Ozs7Ozs7Ozs7OztBQ3hDeEU7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUF1QixtRUFBSSxFOzs7Ozs7Ozs7Ozs7QUN6QjNCO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQWlCLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ25EdEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQWlCLG1FQUFJLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNldHVwIGZyb20gJy4vbW9kdWxlcy9ob21lJztcbmltcG9ydCBNZW51IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vbW9kdWxlcy9jb250YWN0JztcbmNvbnNvbGUubG9nKFwiSW5kZXggaXMgYSBnb1wiKTtcbmNvbnN0IHNldFRhYnMgPSAoKCkgPT4ge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgaG9tZS5jbGFzc0xpc3QgKz0gXCJsYWJlbFwiO1xuICBob21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBtZW51LmNsYXNzTGlzdCArPSBcImxhYmVsXCI7XG4gIGNvbnNvbGUubG9nKG1lbnUuY2xhc3NMaXN0KTtcbiAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdC5jbGFzc0xpc3QgKz0gXCJsYWJlbFwiO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNldFRhYnMoKTtcbiAgICBTZXR1cC5pbml0aWFsaXplKCk7XG4gIH0pO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNldFRhYnMoKTtcbiAgICBNZW51LmluaXRpYWxpemUoKTtcbiAgfSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgc2V0VGFicygpO1xuICAgIENvbnRhY3QuaW5pdGlhbGl6ZSgpO1xuICB9KTtcbiAgZGl2LmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbn0pKCk7XG5TZXR1cC50ZXN0KCk7XG5NZW51LnRlc3QoKTtcbkNvbnRhY3QudGVzdCgpO1xuU2V0dXAuaW5pdGlhbGl6ZSgpO1xuXG5cbi8vZm9yIHRhYiBzd2l0Y2hpbmcgbG9naWNcbi8vZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgYWxlcnQoXCJIZWxsbyBXb3JsZCFcIik7IH0pOyIsIi8vbWFpbiBkaXZcbiAgLy90aXRsZSBkaXZcbiAgLy9zZWN0aW9uXG4gICAgLy8gZm9ybSBvbiBvbmUgc2lkZSwgYXJ0aWNsZSBvbiB0aGUgb3RoZXJcbiAgICAvL2Zvcm1cbiAgICAgIC8vbmFtZSBhbmQgZW1haWwsIHN1YmplY3QgYW5kIG1lc3NhZ2VcbiAgICAgIC8vc2VuZCBidXR0b25cbiAgICAvL2FydGljbGVcbiAgICAgIC8vZGl2IGZvciBkZXNjcmlwdGlvblxuICAgICAgLy9jb250YWN0IGluZm9cbiAgICAgIGNvbnN0IE1lbnUgPSAoKCkgPT4ge1xuICAgICBcblxuICAgIFxuICAgICAgICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgICAgXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCB0ZXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRhY3QgaXMgYSBnbycpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgdGVzdCxcbiAgICAgICAgICAgaW5pdGlhbGl6ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiY29uc3QgU2V0dXAgPSAoKCkgPT4ge1xuICBcbiAgY29uc3Qgc2V0SW1hZ2UgPSAoKSA9PiB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBcImh0dHBzOi8vd3d3LmRpc2NvdmVybG9zYW5nZWxlcy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9zdHlsZXMvaGVyby9wdWJsaWMvaW1hZ2VzLzIwMTktMDEvbG93ZXItcGF0aW8uanBnP2l0b2s9S0dZUDQ5Zk9cIjtcbiAgaW1nLmNsYXNzTGlzdCArPSBcImJhY2tncm91bmQtcGljdHVyZVwiO1xuICBjb25zb2xlLmxvZyhpbWcuY2xhc3NMaXN0KTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIH07XG4gIGNvbnN0IGdldEhlYWRsaW5lID0gKCkgPT4ge1xuICBsZXQgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkbGluZS5pbm5lclRleHQgPSBcIlRoZSBnZW0gb2YgdGhlIGRlc2VydFwiO1xuICByZXR1cm4geyBoZWFkbGluZSB9O1xuICB9O1xuICBjb25zdCBzZXRIZWFkbGluZSA9IChoZWFkbGluZSkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGRpdi5hcHBlbmQoaGVhZGxpbmUuaGVhZGxpbmUpO1xuICAgIH07XG4gIGNvbnN0IGdldEludHJvID0gKCkgPT4ge1xuICAgIGxldCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaW50cm8uaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIG91ciB3b25kZXJmdWwgcmVzdGF1cmFudCEgWW91IHdpbGwgYmUgYW1hemVkIGF0IG91ciBmb29kIGFuZCBkYXp6bGVkIGJ5IG91ciBzZXJ2aWNlXCI7XG4gICAgcmV0dXJuIHsgaW50cm8gfTtcbiAgfTtcbiAgY29uc3Qgc2V0SW50cm8gPSAoaW50cm8pID0+IHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkaXYuYXBwZW5kKGludHJvLmludHJvKTtcbiAgfTtcbiAgICBjb25zdCBnZXRJbnRybzIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW50cm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGludHJvMi5pbm5lclRleHQgPSBcIkp1c3QgZ2l2ZSB1cyBhIGNoYW5jZSB0byBpbXByZXNzIVwiO1xuICAgICAgcmV0dXJuIHsgaW50cm8yIH07XG4gICAgfTtcbiAgICBjb25zdCBzZXRJbnRybzIgPSAoaW50cm8yKSA9PiB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgIGRpdi5hcHBlbmQoaW50cm8yLmludHJvMik7XG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgc2V0SW1hZ2UoKTtcbiAgICAgIHNldEhlYWRsaW5lKGdldEhlYWRsaW5lKCkpXG4gICAgICBzZXRJbnRybyhnZXRJbnRybygpKTtcbiAgICAgIHNldEludHJvMihnZXRJbnRybzIoKSk7XG4gICAgfTtcbiAgICBjb25zdCB0ZXN0ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0hvbWUgaXMgYSBnbycpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgdGVzdCxcbiAgICAgaW5pdGlhbGl6ZVxuICAgIH07XG4gIH0pKCk7XG4gIGV4cG9ydCBkZWZhdWx0IFNldHVwOyIsImNvbnN0IE1lbnUgPSAoKCkgPT4ge1xuICAvLyBkaXYgY29udGFpbmVyIHRvIGFwcGVuZCB0byAjY29udGVudFxuICAgIC8vc2VjdGlvbnMgZm9yIHNhbGFkcy9wYXN0YXMvcGFuaW5pc1xuICAgICAgLy9kaXYgZm9yIHRpdGxlXG4gICAgICAgIC8vaDNcbiAgICAgIC8vcm93IGZvciBldmVyeSB0d28gbWVudSBpdGVtc1xuICAgICAgICAvL2FydGljbGUgZm9yIG1lbnUgaXRlbSBcbiAgICAgICAgICAvL3BpY3R1cmVcbiAgICAgICAgICAvL2RpdiBmb3IgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIC8vZGl2IGZvciB0aXRsZVxuICAgICAgICAgICAgICAvL2g1IGZvciB0aXRsZSBjb250ZW50XG4gICAgICAgICAgICAvL3AgZm9yIGRlc2NyaXB0aW9uIG9mIG1lbnUgaXRlbVxuICAvL2NhbGwgY2xhc3MgdG8gc2V0dXAgY29udGVudCBlYXNpbHlcbiAgICAvL3BhcmFtZXRlcnM6IHNlY3Rpb24gbmFtZVxuICAgICAgLy8gaXRlbSBwaWN0dXJlXG4gICAgICAvL2l0ZW0gbmFtZVxuICAgICAgLy9pdGVtIHByaWNlXG4gICAgICAvL2l0ZW0gZGVzY3JpcHRpb25cblxuICBjb25zdCBzZXRTYWxhZHMgPSAoKSA9PiB7XG5cbiAgfTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICBcbiAgICB9O1xuICAgIGNvbnN0IHRlc3QgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTWVudSBpcyBhIGdvJyk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICB0ZXN0LFxuICAgICBpbml0aWFsaXplXG4gICAgfTtcbiAgfSkoKTtcbiAgZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9