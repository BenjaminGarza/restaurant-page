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
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_contact__WEBPACK_IMPORTED_MODULE_2__);



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
      case "Contact": _modules_contact__WEBPACK_IMPORTED_MODULE_2___default.a.initialize()
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
_modules_contact__WEBPACK_IMPORTED_MODULE_2___default.a.test();
_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
//document.querySelector('#content').addEventListener('click', function() {console.log(event.target);});


//for tab switching logic
//element.addEventListener("click", function(){ alert("Hello World!"); });

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Identifier 'nameLabel' has already been declared (14:7)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \t\t\tlet nameLabel = document.createElement(\"label\");\n| \t\t\tlet nameInput = document.createElement(\"input\");\n> \t\t\tlet nameLabel = document.createElement(\"label\");\n| \t\t\tlet nameInput = document.createElement(\"input\");\n| \t\t\tlet nameLabel = document.createElement(\"label\");");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTtBQUNNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsY0FBYztBQUNkO0FBQ0EsbUJBQW1CLHFEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSw2QkFBNkI7QUFDckcsd0VBQXdFLDZCQUE2QjtBQUNyRywyRUFBMkUsNkJBQTZCO0FBQ3hHO0FBQ0E7OztBQUdBLHFEQUFJO0FBQ0oscURBQUk7QUFDSix1REFBTztBQUNQLHFEQUFJO0FBQ0osMkVBQTJFLDJCQUEyQjs7O0FBR3RHO0FBQ0EsK0NBQStDLHVCQUF1QixFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekR4RTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFpQixvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNuRHRCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQWlCLG1FQUFJLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xuY29uc29sZS5sb2coXCJJbmRleCBpcyBhIGdvXCIpO1xuY29uc3Qgc2V0VGFicyA9ICgpID0+IHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGhvbWUuaWQgPSAoXCJIb21lXCIpO1xuICBob21lLmNsYXNzTGlzdCArPSBcImxhYmVsXCI7XG4gIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gIG1lbnUuaWQgPSAoXCJNZW51XCIpO1xuICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBtZW51LmNsYXNzTGlzdCArPSBcImxhYmVsXCI7XG4gIGNvbnNvbGUubG9nKG1lbnUuY2xhc3NMaXN0KTtcbiAgY29udGFjdC5pZCA9IChcIkNvbnRhY3RcIik7XG4gIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3QuY2xhc3NMaXN0ICs9IFwibGFiZWxcIjtcbiAgXG4gIGRpdi5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG59O1xuc2V0VGFicygpO1xuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBwYWdlTG9hZGVyID0gKHBhZ2VUb0xvYWQpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7IC8vQ2xlYXIgI2NvbnRlbnQgZGl2XG4gICAgc2V0VGFicygpOy8vIFJlLWFwcGVuZCB0YWJzXG4gICAgc3dpdGNoKHBhZ2VUb0xvYWQpe1xuICAgICAgY2FzZSBcIkhvbWVcIjogSG9tZS5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9tZSBmaXJlXCIpO1xuICAgICAgICBldmVudHMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTWVudVwiOiBNZW51LmluaXRpYWxpemUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IGZpcmVcIik7XG4gICAgICAgIGV2ZW50cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJDb250YWN0XCI6IENvbnRhY3QuaW5pdGlhbGl6ZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGFjdCBmaXJlXCIpO1xuICAgICAgICBldmVudHMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgfTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge3BhZ2VMb2FkZXIoZXZlbnQudGFyZ2V0LmlkKTt9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI01lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge3BhZ2VMb2FkZXIoZXZlbnQudGFyZ2V0LmlkKTt9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NvbnRhY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge3BhZ2VMb2FkZXIoZXZlbnQudGFyZ2V0LmlkKTt9KTtcbn07XG5ldmVudHMoKTtcblxuXG5Ib21lLnRlc3QoKTtcbk1lbnUudGVzdCgpO1xuQ29udGFjdC50ZXN0KCk7XG5Ib21lLmluaXRpYWxpemUoKTtcbi8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7fSk7XG5cblxuLy9mb3IgdGFiIHN3aXRjaGluZyBsb2dpY1xuLy9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyBhbGVydChcIkhlbGxvIFdvcmxkIVwiKTsgfSk7IiwiY29uc3QgU2V0dXAgPSAoKCkgPT4ge1xuICBcbiAgY29uc3Qgc2V0SW1hZ2UgPSAoKSA9PiB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBcImh0dHBzOi8vd3d3LmRpc2NvdmVybG9zYW5nZWxlcy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9zdHlsZXMvaGVyby9wdWJsaWMvaW1hZ2VzLzIwMTktMDEvbG93ZXItcGF0aW8uanBnP2l0b2s9S0dZUDQ5Zk9cIjtcbiAgaW1nLmNsYXNzTGlzdCArPSBcImJhY2tncm91bmQtcGljdHVyZVwiO1xuICBjb25zb2xlLmxvZyhpbWcuY2xhc3NMaXN0KTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIH07XG4gIGNvbnN0IGdldEhlYWRsaW5lID0gKCkgPT4ge1xuICBsZXQgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkbGluZS5pbm5lclRleHQgPSBcIlRoZSBnZW0gb2YgdGhlIGRlc2VydFwiO1xuICByZXR1cm4geyBoZWFkbGluZSB9O1xuICB9O1xuICBjb25zdCBzZXRIZWFkbGluZSA9IChoZWFkbGluZSkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGRpdi5hcHBlbmQoaGVhZGxpbmUuaGVhZGxpbmUpO1xuICAgIH07XG4gIGNvbnN0IGdldEludHJvID0gKCkgPT4ge1xuICAgIGxldCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaW50cm8uaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIG91ciB3b25kZXJmdWwgcmVzdGF1cmFudCEgWW91IHdpbGwgYmUgYW1hemVkIGF0IG91ciBmb29kIGFuZCBkYXp6bGVkIGJ5IG91ciBzZXJ2aWNlXCI7XG4gICAgcmV0dXJuIHsgaW50cm8gfTtcbiAgfTtcbiAgY29uc3Qgc2V0SW50cm8gPSAoaW50cm8pID0+IHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkaXYuYXBwZW5kKGludHJvLmludHJvKTtcbiAgfTtcbiAgICBjb25zdCBnZXRJbnRybzIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW50cm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGludHJvMi5pbm5lclRleHQgPSBcIkp1c3QgZ2l2ZSB1cyBhIGNoYW5jZSB0byBpbXByZXNzIVwiO1xuICAgICAgcmV0dXJuIHsgaW50cm8yIH07XG4gICAgfTtcbiAgICBjb25zdCBzZXRJbnRybzIgPSAoaW50cm8yKSA9PiB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgIGRpdi5hcHBlbmQoaW50cm8yLmludHJvMik7XG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgc2V0SW1hZ2UoKTtcbiAgICAgIHNldEhlYWRsaW5lKGdldEhlYWRsaW5lKCkpXG4gICAgICBzZXRJbnRybyhnZXRJbnRybygpKTtcbiAgICAgIHNldEludHJvMihnZXRJbnRybzIoKSk7XG4gICAgfTtcbiAgICBjb25zdCB0ZXN0ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0hvbWUgaXMgYSBnbycpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgdGVzdCxcbiAgICAgaW5pdGlhbGl6ZVxuICAgIH07XG4gIH0pKCk7XG4gIGV4cG9ydCBkZWZhdWx0IFNldHVwOyIsImNvbnN0IE1lbnUgPSAoKCkgPT4ge1xuICAvLyBkaXYgY29udGFpbmVyIHRvIGFwcGVuZCB0byAjY29udGVudFxuICAgIC8vc2VjdGlvbnMgZm9yIHNhbGFkcy9wYXN0YXMvcGFuaW5pc1xuICAgICAgLy9kaXYgZm9yIHRpdGxlXG4gICAgICAgIC8vaDNcbiAgICAgIC8vcm93IGZvciBldmVyeSB0d28gbWVudSBpdGVtc1xuICAgICAgICAvL2FydGljbGUgZm9yIG1lbnUgaXRlbSBcbiAgICAgICAgICAvL3BpY3R1cmVcbiAgICAgICAgICAvL2RpdiBmb3IgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIC8vZGl2IGZvciB0aXRsZVxuICAgICAgICAgICAgICAvL2g1IGZvciB0aXRsZSBjb250ZW50XG4gICAgICAgICAgICAvL3AgZm9yIGRlc2NyaXB0aW9uIG9mIG1lbnUgaXRlbVxuICAvL2NhbGwgY2xhc3MgdG8gc2V0dXAgY29udGVudCBlYXNpbHlcbiAgICAvL3BhcmFtZXRlcnM6IHNlY3Rpb24gbmFtZVxuICAgICAgLy8gaXRlbSBwaWN0dXJlXG4gICAgICAvL2l0ZW0gbmFtZVxuICAgICAgLy9pdGVtIHByaWNlXG4gICAgICAvL2l0ZW0gZGVzY3JpcHRpb25cblxuICBjb25zdCBzZXRTYWxhZHMgPSAoKSA9PiB7XG5cbiAgfTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIH07XG4gICAgY29uc3QgdGVzdCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdNZW51IGlzIGEgZ28nKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgIHRlc3QsXG4gICAgIGluaXRpYWxpemVcbiAgICB9O1xuICB9KSgpO1xuICBleHBvcnQgZGVmYXVsdCBNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=