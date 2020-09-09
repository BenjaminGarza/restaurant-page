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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//console.log('webpack compiled');
//import { loadHome } from './home';

//import { loadContactPage } from './contact'; 

Object(_menu__WEBPACK_IMPORTED_MODULE_0__["loadMenu"])();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: loadMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMenu", function() { return loadMenu; });
const loadMenu = () => {
  let contentDiv = document.querySelector('#content'); 
  let titleDiv = document.createElement('div');
  let titleDivContent = document.createElement('h2');
  titleDivContent.textContent = 'Menu';
  titleDiv.appendChild(titleDivContent);
  contentDiv.appendChild(titleDiv);
  const mainContent = () => {
    let menuSection = document.createElement('section');
    const createMenuItems = (foodImages,foodPrices,foodNames,foodDescriptions) => {
      for(let i = 0; i < foodImages.length; i++){
        let menuItem = document.createElement('article');
        let photoContainer = document.createElement('figure');
        let img = document.createElement('img');
        img.src = 'src/images/chickenStrips.jpg';
        console.log(img.src);
        photoContainer.appendChild(img);
        let descriptionContainer = document.createElement('figcaption');
        let names = document.createTextNode(foodNames[i] + ': ');
        let description = document.createTextNode(foodDescriptions[i]);
        let prices = document.createTextNode('$'+ foodPrices[i] + ' ');
        descriptionContainer.appendChild(prices);
        descriptionContainer.appendChild(names);
        descriptionContainer.appendChild(description);
        menuItem.appendChild(photoContainer);
        menuItem.appendChild(descriptionContainer);
        menuItem.classList.add('menu-item');
        menuSection.appendChild(menuItem);
      };
    
    
    };

    const appetizers = () => {
      let sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Appetizers';
      let appImages = ['test','test','test','test'];
      let appPrices = [8,9,8.5,7.5]; 
      let appTitles = ['Buffalo Chicken Strips', 
      'Candied tomatoes on basil leaves','Mini calzones','Mozarella sticks'];
      let appDescriptions = ['A crispy, tender event',
    'Crunchy toffee and ripe, juicy tomato',
    'Pockets of cheesy goodness',
    'Mozarrella dipped in batter and fried for your delight'
    ];
    menuSection.appendChild(sectionTitle);
    createMenuItems(appImages,appPrices,appTitles,appDescriptions);
    };
      
    contentDiv.appendChild(menuSection);
    const entrees = () => {
      let sectionTitle = document.createElement('h3');
        sectionTitle.textContent = 'Entrees';
        let entreeImages = ['test','test','test','test'];
        let entreePrices = [14,9,8.5,7.5]; 
        let entreeTitles = ['Tandoori Lamb Pizza','Camogli Panino',
        'Bruchetta Classico', 'Vegetariano Panino'];
        let entreeDescriptions = ['Ground lamb, mozzarella, and ricotta on top of a crispy crust',
      'Fresh mozzarella, tomato, basil',
      'Toasted bread with garlic, mozarella, tomatoes and basil drizzled with olive oil',
      'Grilled marinated eggplant, mozarella, lettuce, and tomato'
      ];
      menuSection.appendChild(sectionTitle);
      createMenuItems(entreeImages,entreePrices,entreeTitles,entreeDescriptions);
      };
      contentDiv.appendChild(menuSection);

      const desserts = () => {
      let sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Desserts';
      let dessertImages = ['test','test','test','test'];
      let dessertPrices = [8,9,8.5,7.5]; 
      let dessertTitles = ['Gelato', 
      'Tomate du saltambique','Canoli','Panna cotta'];
      let dessertDescriptions = ['Thick, rich, and ultra creamy gelato',
    '12 flavor stuffed tomato bathed in a creme de caramel',
    'A flakey shell wrapped around a creamy and sweet ricotta filling',
    'An airy, but firm custard topped with berries'];
    menuSection.appendChild(sectionTitle);
    createMenuItems(dessertImages,dessertPrices,dessertTitles,dessertDescriptions);
      };
      appetizers();
      entrees();
      desserts();
  };
    mainContent();
  };



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0EsVUFBVSxXQUFXO0FBQ2E7QUFDbEMsVUFBVSxrQkFBa0Isa0I7O0FBRTVCLHNEQUFROzs7Ozs7Ozs7Ozs7O0FDTFI7QUFBQTtBQUFBO0FBQ0Esc0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9jb25zb2xlLmxvZygnd2VicGFjayBjb21waWxlZCcpO1xuLy9pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudSc7XG4vL2ltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdCc7IFxuXG5sb2FkTWVudSgpO1xuIiwiY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTsgXG4gIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdGl0bGVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGVEaXZDb250ZW50LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZURpdkNvbnRlbnQpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGNyZWF0ZU1lbnVJdGVtcyA9IChmb29kSW1hZ2VzLGZvb2RQcmljZXMsZm9vZE5hbWVzLGZvb2REZXNjcmlwdGlvbnMpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb29kSW1hZ2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICBsZXQgcGhvdG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gJ3NyYy9pbWFnZXMvY2hpY2tlblN0cmlwcy5qcGcnO1xuICAgICAgICBjb25zb2xlLmxvZyhpbWcuc3JjKTtcbiAgICAgICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xuICAgICAgICBsZXQgbmFtZXMgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmb29kTmFtZXNbaV0gKyAnOiAnKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZm9vZERlc2NyaXB0aW9uc1tpXSk7XG4gICAgICAgIGxldCBwcmljZXMgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJCcrIGZvb2RQcmljZXNbaV0gKyAnICcpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZXMpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lcyk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGhvdG9Db250YWluZXIpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgICB9O1xuICAgIFxuICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBhcHBldGl6ZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnQXBwZXRpemVycyc7XG4gICAgICBsZXQgYXBwSW1hZ2VzID0gWyd0ZXN0JywndGVzdCcsJ3Rlc3QnLCd0ZXN0J107XG4gICAgICBsZXQgYXBwUHJpY2VzID0gWzgsOSw4LjUsNy41XTsgXG4gICAgICBsZXQgYXBwVGl0bGVzID0gWydCdWZmYWxvIENoaWNrZW4gU3RyaXBzJywgXG4gICAgICAnQ2FuZGllZCB0b21hdG9lcyBvbiBiYXNpbCBsZWF2ZXMnLCdNaW5pIGNhbHpvbmVzJywnTW96YXJlbGxhIHN0aWNrcyddO1xuICAgICAgbGV0IGFwcERlc2NyaXB0aW9ucyA9IFsnQSBjcmlzcHksIHRlbmRlciBldmVudCcsXG4gICAgJ0NydW5jaHkgdG9mZmVlIGFuZCByaXBlLCBqdWljeSB0b21hdG8nLFxuICAgICdQb2NrZXRzIG9mIGNoZWVzeSBnb29kbmVzcycsXG4gICAgJ01vemFycmVsbGEgZGlwcGVkIGluIGJhdHRlciBhbmQgZnJpZWQgZm9yIHlvdXIgZGVsaWdodCdcbiAgICBdO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgY3JlYXRlTWVudUl0ZW1zKGFwcEltYWdlcyxhcHBQcmljZXMsYXBwVGl0bGVzLGFwcERlc2NyaXB0aW9ucyk7XG4gICAgfTtcbiAgICAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuICAgIGNvbnN0IGVudHJlZXMgPSAoKSA9PiB7XG4gICAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0VudHJlZXMnO1xuICAgICAgICBsZXQgZW50cmVlSW1hZ2VzID0gWyd0ZXN0JywndGVzdCcsJ3Rlc3QnLCd0ZXN0J107XG4gICAgICAgIGxldCBlbnRyZWVQcmljZXMgPSBbMTQsOSw4LjUsNy41XTsgXG4gICAgICAgIGxldCBlbnRyZWVUaXRsZXMgPSBbJ1RhbmRvb3JpIExhbWIgUGl6emEnLCdDYW1vZ2xpIFBhbmlubycsXG4gICAgICAgICdCcnVjaGV0dGEgQ2xhc3NpY28nLCAnVmVnZXRhcmlhbm8gUGFuaW5vJ107XG4gICAgICAgIGxldCBlbnRyZWVEZXNjcmlwdGlvbnMgPSBbJ0dyb3VuZCBsYW1iLCBtb3p6YXJlbGxhLCBhbmQgcmljb3R0YSBvbiB0b3Agb2YgYSBjcmlzcHkgY3J1c3QnLFxuICAgICAgJ0ZyZXNoIG1venphcmVsbGEsIHRvbWF0bywgYmFzaWwnLFxuICAgICAgJ1RvYXN0ZWQgYnJlYWQgd2l0aCBnYXJsaWMsIG1vemFyZWxsYSwgdG9tYXRvZXMgYW5kIGJhc2lsIGRyaXp6bGVkIHdpdGggb2xpdmUgb2lsJyxcbiAgICAgICdHcmlsbGVkIG1hcmluYXRlZCBlZ2dwbGFudCwgbW96YXJlbGxhLCBsZXR0dWNlLCBhbmQgdG9tYXRvJ1xuICAgICAgXTtcbiAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgICBjcmVhdGVNZW51SXRlbXMoZW50cmVlSW1hZ2VzLGVudHJlZVByaWNlcyxlbnRyZWVUaXRsZXMsZW50cmVlRGVzY3JpcHRpb25zKTtcbiAgICAgIH07XG4gICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcblxuICAgICAgY29uc3QgZGVzc2VydHMgPSAoKSA9PiB7XG4gICAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cyc7XG4gICAgICBsZXQgZGVzc2VydEltYWdlcyA9IFsndGVzdCcsJ3Rlc3QnLCd0ZXN0JywndGVzdCddO1xuICAgICAgbGV0IGRlc3NlcnRQcmljZXMgPSBbOCw5LDguNSw3LjVdOyBcbiAgICAgIGxldCBkZXNzZXJ0VGl0bGVzID0gWydHZWxhdG8nLCBcbiAgICAgICdUb21hdGUgZHUgc2FsdGFtYmlxdWUnLCdDYW5vbGknLCdQYW5uYSBjb3R0YSddO1xuICAgICAgbGV0IGRlc3NlcnREZXNjcmlwdGlvbnMgPSBbJ1RoaWNrLCByaWNoLCBhbmQgdWx0cmEgY3JlYW15IGdlbGF0bycsXG4gICAgJzEyIGZsYXZvciBzdHVmZmVkIHRvbWF0byBiYXRoZWQgaW4gYSBjcmVtZSBkZSBjYXJhbWVsJyxcbiAgICAnQSBmbGFrZXkgc2hlbGwgd3JhcHBlZCBhcm91bmQgYSBjcmVhbXkgYW5kIHN3ZWV0IHJpY290dGEgZmlsbGluZycsXG4gICAgJ0FuIGFpcnksIGJ1dCBmaXJtIGN1c3RhcmQgdG9wcGVkIHdpdGggYmVycmllcyddO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgY3JlYXRlTWVudUl0ZW1zKGRlc3NlcnRJbWFnZXMsZGVzc2VydFByaWNlcyxkZXNzZXJ0VGl0bGVzLGRlc3NlcnREZXNjcmlwdGlvbnMpO1xuICAgICAgfTtcbiAgICAgIGFwcGV0aXplcnMoKTtcbiAgICAgIGVudHJlZXMoKTtcbiAgICAgIGRlc3NlcnRzKCk7XG4gIH07XG4gICAgbWFpbkNvbnRlbnQoKTtcbiAgfTtcblxuZXhwb3J0IHsgbG9hZE1lbnUgfTsiXSwic291cmNlUm9vdCI6IiJ9