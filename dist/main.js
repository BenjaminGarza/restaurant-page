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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: loadContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContact", function() { return loadContact; });
const loadContact = () => {
 let contentDiv = document.querySelector('#content');
 let contactTitle = document.createElement('h2');
 contactTitle.innerHTML = 'Contact us';
 contactTitle.classList.add('contact-title');
 contentDiv.appendChild(contactTitle);
 let contactForm = document.createElement('form');
 contactForm.classList.add('contact-form');


  const createSection = (labelContent, inputType) => {
    let div = document.createElement('div');
    let label = document.createElement('label');
    label.setAttribute('for', 'input')
    let input = document.createElement('input');
    input.setAttribute("type",inputType);
    div.classList.add("form-div");
    const labelContentTextNode = document.createTextNode(labelContent);
    label.appendChild(labelContentTextNode);
    div.appendChild(label);
    div.appendChild(input);
    contactForm.appendChild(div);

    return( div );
  };

  createSection("Name","text");
  createSection("Email","text");
  createSection("Subject","text");
  createSection("Message","textarea");
  

  let asideResponse = document.createElement('aside');
  asideResponse.classList.add("response-checkbox");
  let labelCheckbox = document.createElement('label');
  const labelMessageContent = document.createTextNode("Would you like a response?");
  labelCheckbox.appendChild(labelMessageContent);
  labelCheckbox.htmlFor = 'input';
  let inputCheckbox= document.createElement('input');
  inputCheckbox.type = 'checkbox';
  asideResponse.appendChild(labelCheckbox);
  asideResponse.appendChild(inputCheckbox);
  const checkboxMessage = document.createTextNode("Yes");
  asideResponse.appendChild(checkboxMessage);
  contactForm.appendChild(asideResponse);

  contentDiv.appendChild(contactForm);
let divButton = document.createElement('div');
let buttonCancel = document.createElement('button');
buttonCancel.innerHTML = 'Cancel';
let buttonSubmit = document.createElement('button');
buttonSubmit.innerHTML = 'Submit';
buttonCancel.classList.add('contact-button');
buttonSubmit.classList.add('contact-button');
divButton.appendChild(buttonCancel);
divButton.appendChild(buttonSubmit);
document.querySelector('#content').appendChild(divButton);
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: loadHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHome", function() { return loadHome; });
const loadHome = () => {
let mainDiv = document.querySelector('#content');
let div = document.createElement('div');
let headerDiv = document.createElement('div')
let title = document.createElement('h2');
let smallTitle = document.createElement('h4');
let titleContent = document.createTextNode("Welcome to our restaurant");
let smallTitleContent = document.createTextNode("The best dessert in town");

title.classList.add('title-style');
smallTitle.classList.add('title-style');
div.classList.add('restaurant-background');
smallTitle.appendChild(smallTitleContent);
title.appendChild(titleContent);
headerDiv.appendChild(title);
headerDiv.appendChild(smallTitle);
div.appendChild(headerDiv);
mainDiv.appendChild(div);
console.log('yep, its working');
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


 

const clearPage = () => {
  let div = document.querySelector('#content')
  div.innerHTML= '';
}
const addNav = () => {
  let div = document.querySelector('#content');
  let nav = document.createElement('nav');
  nav.classList.add('nav-bar')
  let home = document.createElement('div');
  home.classList.add('nav-item')
  const addLinks = () => {
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    div.appendChild(nav);
  }
  home.innerText = 'Home';
  home.addEventListener('click',function(){
    clearPage();
    addLinks();
    Object(_home__WEBPACK_IMPORTED_MODULE_0__["loadHome"])();
  });
  let menu = document.createElement('div');
  menu.innerText = 'Menu';
  menu.classList.add('nav-item')
  menu.addEventListener('click',function(){
    clearPage();
    addLinks();
    Object(_menu__WEBPACK_IMPORTED_MODULE_1__["loadMenu"])();
  });
  let contact = document.createElement('div');
  contact.innerText = 'Contact';
  contact.classList.add('nav-item')
  contact.addEventListener('click',function(){
    clearPage();
    addLinks();
    Object(_contact__WEBPACK_IMPORTED_MODULE_2__["loadContact"])();
  });
  addLinks();
};

addNav();
Object(_home__WEBPACK_IMPORTED_MODULE_0__["loadHome"])();

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
    menuSection.classList.add('food-section')
    const createMenuItems = (foodImages,foodPrices,foodNames,foodDescriptions) => {
      for(let i = 0; i < foodImages.length; i++){
        let menuItem = document.createElement('article');
        let photoContainer = document.createElement('figure');
        let img = document.createElement('img');
        img.src = 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Buffalo-Chicken-Tenders-688x1032.jpg'
        img.classList.add('image')
        photoContainer.appendChild(img);
        photoContainer.classList.add('photo-container');
        let descriptionContainer = document.createElement('figcaption');
        let names = document.createTextNode(foodNames[i] + ': ');
        let br = document.createElement('br');
        let description = document.createTextNode(foodDescriptions[i]);
        let prices = document.createTextNode('$'+ foodPrices[i] + ' ');
        descriptionContainer.classList.add('description');
        descriptionContainer.appendChild(prices);
        descriptionContainer.appendChild(names);
        descriptionContainer.appendChild(br);
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
      'Candied tomatoes on basil leaves','Smoked salmon bites','Mozarella sticks'];
      let appDescriptions = ['A crispy, tender event',
    'Crunchy toffee and ripe, juicy tomato',
    'Smoked salmon atop cream cheese and crunchy crackers',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7O0FDckJwQjtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNBOzs7QUFHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFXO0FBQ2YsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxzREFBUSxHOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q1I7QUFDQSxzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuIGxldCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuIGNvbnRhY3RUaXRsZS5pbm5lckhUTUwgPSAnQ29udGFjdCB1cyc7XG4gY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gbGV0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuIGNvbnRhY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuXG5cbiAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChsYWJlbENvbnRlbnQsIGlucHV0VHlwZSkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2lucHV0JylcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixpbnB1dFR5cGUpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kaXZcIik7XG4gICAgY29uc3QgbGFiZWxDb250ZW50VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbENvbnRlbnQpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsQ29udGVudFRleHROb2RlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIHJldHVybiggZGl2ICk7XG4gIH07XG5cbiAgY3JlYXRlU2VjdGlvbihcIk5hbWVcIixcInRleHRcIik7XG4gIGNyZWF0ZVNlY3Rpb24oXCJFbWFpbFwiLFwidGV4dFwiKTtcbiAgY3JlYXRlU2VjdGlvbihcIlN1YmplY3RcIixcInRleHRcIik7XG4gIGNyZWF0ZVNlY3Rpb24oXCJNZXNzYWdlXCIsXCJ0ZXh0YXJlYVwiKTtcbiAgXG5cbiAgbGV0IGFzaWRlUmVzcG9uc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICBhc2lkZVJlc3BvbnNlLmNsYXNzTGlzdC5hZGQoXCJyZXNwb25zZS1jaGVja2JveFwiKTtcbiAgbGV0IGxhYmVsQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBsYWJlbE1lc3NhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJXb3VsZCB5b3UgbGlrZSBhIHJlc3BvbnNlP1wiKTtcbiAgbGFiZWxDaGVja2JveC5hcHBlbmRDaGlsZChsYWJlbE1lc3NhZ2VDb250ZW50KTtcbiAgbGFiZWxDaGVja2JveC5odG1sRm9yID0gJ2lucHV0JztcbiAgbGV0IGlucHV0Q2hlY2tib3g9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Q2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGFzaWRlUmVzcG9uc2UuYXBwZW5kQ2hpbGQobGFiZWxDaGVja2JveCk7XG4gIGFzaWRlUmVzcG9uc2UuYXBwZW5kQ2hpbGQoaW5wdXRDaGVja2JveCk7XG4gIGNvbnN0IGNoZWNrYm94TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWWVzXCIpO1xuICBhc2lkZVJlc3BvbnNlLmFwcGVuZENoaWxkKGNoZWNrYm94TWVzc2FnZSk7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGFzaWRlUmVzcG9uc2UpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xubGV0IGRpdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubGV0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYnV0dG9uQ2FuY2VsLmlubmVySFRNTCA9ICdDYW5jZWwnO1xubGV0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYnV0dG9uU3VibWl0LmlubmVySFRNTCA9ICdTdWJtaXQnO1xuYnV0dG9uQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnV0dG9uJyk7XG5idXR0b25TdWJtaXQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idXR0b24nKTtcbmRpdkJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xuZGl2QnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGRpdkJ1dHRvbik7XG59O1xuXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9OyIsImNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xubGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubGV0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubGV0IHNtYWxsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xubGV0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiV2VsY29tZSB0byBvdXIgcmVzdGF1cmFudFwiKTtcbmxldCBzbWFsbFRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGhlIGJlc3QgZGVzc2VydCBpbiB0b3duXCIpO1xuXG50aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1zdHlsZScpO1xuc21hbGxUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1zdHlsZScpO1xuZGl2LmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtYmFja2dyb3VuZCcpO1xuc21hbGxUaXRsZS5hcHBlbmRDaGlsZChzbWFsbFRpdGxlQ29udGVudCk7XG50aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChzbWFsbFRpdGxlKTtcbmRpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpO1xuY29uc29sZS5sb2coJ3llcCwgaXRzIHdvcmtpbmcnKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRIb21lIH07XG4iLCJpbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7IFxuXG5jb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gIGRpdi5pbm5lckhUTUw9ICcnO1xufVxuY29uc3QgYWRkTmF2ID0gKCkgPT4ge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpXG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuICBjb25zdCBhZGRMaW5rcyA9ICgpID0+IHtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2KTtcbiAgfVxuICBob21lLmlubmVyVGV4dCA9ICdIb21lJztcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBhZGRMaW5rcygpO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmlubmVyVGV4dCA9ICdNZW51JztcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgYWRkTGlua3MoKTtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcbiAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIGNsZWFyUGFnZSgpO1xuICAgIGFkZExpbmtzKCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG4gIGFkZExpbmtzKCk7XG59O1xuXG5hZGROYXYoKTtcbmxvYWRIb21lKCk7IiwiXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpOyBcbiAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCB0aXRsZURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZURpdkNvbnRlbnQudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2Q29udGVudCk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICBjb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9vZC1zZWN0aW9uJylcbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbXMgPSAoZm9vZEltYWdlcyxmb29kUHJpY2VzLGZvb2ROYW1lcyxmb29kRGVzY3JpcHRpb25zKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZm9vZEltYWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgbGV0IHBob3RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9ICdodHRwczovL2Rpbm5lcnRoZW5kZXNzZXJ0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9CdWZmYWxvLUNoaWNrZW4tVGVuZGVycy02ODh4MTAzMi5qcGcnXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZScpXG4gICAgICAgIHBob3RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIHBob3RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bob3RvLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XG4gICAgICAgIGxldCBuYW1lcyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZvb2ROYW1lc1tpXSArICc6ICcpO1xuICAgICAgICBsZXQgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmb29kRGVzY3JpcHRpb25zW2ldKTtcbiAgICAgICAgbGV0IHByaWNlcyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCckJysgZm9vZFByaWNlc1tpXSArICcgJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlcyk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVzKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnIpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBob3RvQ29udGFpbmVyKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgfTtcbiAgICBcbiAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgYXBwZXRpemVycyA9ICgpID0+IHtcbiAgICAgIGxldCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0FwcGV0aXplcnMnO1xuICAgICAgbGV0IGFwcEltYWdlcyA9IFsndGVzdCcsJ3Rlc3QnLCd0ZXN0JywndGVzdCddO1xuICAgICAgbGV0IGFwcFByaWNlcyA9IFs4LDksOC41LDcuNV07IFxuICAgICAgbGV0IGFwcFRpdGxlcyA9IFsnQnVmZmFsbyBDaGlja2VuIFN0cmlwcycsIFxuICAgICAgJ0NhbmRpZWQgdG9tYXRvZXMgb24gYmFzaWwgbGVhdmVzJywnU21va2VkIHNhbG1vbiBiaXRlcycsJ01vemFyZWxsYSBzdGlja3MnXTtcbiAgICAgIGxldCBhcHBEZXNjcmlwdGlvbnMgPSBbJ0EgY3Jpc3B5LCB0ZW5kZXIgZXZlbnQnLFxuICAgICdDcnVuY2h5IHRvZmZlZSBhbmQgcmlwZSwganVpY3kgdG9tYXRvJyxcbiAgICAnU21va2VkIHNhbG1vbiBhdG9wIGNyZWFtIGNoZWVzZSBhbmQgY3J1bmNoeSBjcmFja2VycycsXG4gICAgJ01vemFycmVsbGEgZGlwcGVkIGluIGJhdHRlciBhbmQgZnJpZWQgZm9yIHlvdXIgZGVsaWdodCdcbiAgICBdO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgY3JlYXRlTWVudUl0ZW1zKGFwcEltYWdlcyxhcHBQcmljZXMsYXBwVGl0bGVzLGFwcERlc2NyaXB0aW9ucyk7XG4gICAgfTtcbiAgICAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuICAgIGNvbnN0IGVudHJlZXMgPSAoKSA9PiB7XG4gICAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0VudHJlZXMnO1xuICAgICAgICBsZXQgZW50cmVlSW1hZ2VzID0gWyd0ZXN0JywndGVzdCcsJ3Rlc3QnLCd0ZXN0J107XG4gICAgICAgIGxldCBlbnRyZWVQcmljZXMgPSBbMTQsOSw4LjUsNy41XTsgXG4gICAgICAgIGxldCBlbnRyZWVUaXRsZXMgPSBbJ1RhbmRvb3JpIExhbWIgUGl6emEnLCdDYW1vZ2xpIFBhbmlubycsXG4gICAgICAgICdCcnVjaGV0dGEgQ2xhc3NpY28nLCAnVmVnZXRhcmlhbm8gUGFuaW5vJ107XG4gICAgICAgIGxldCBlbnRyZWVEZXNjcmlwdGlvbnMgPSBbJ0dyb3VuZCBsYW1iLCBtb3p6YXJlbGxhLCBhbmQgcmljb3R0YSBvbiB0b3Agb2YgYSBjcmlzcHkgY3J1c3QnLFxuICAgICAgJ0ZyZXNoIG1venphcmVsbGEsIHRvbWF0bywgYmFzaWwnLFxuICAgICAgJ1RvYXN0ZWQgYnJlYWQgd2l0aCBnYXJsaWMsIG1vemFyZWxsYSwgdG9tYXRvZXMgYW5kIGJhc2lsIGRyaXp6bGVkIHdpdGggb2xpdmUgb2lsJyxcbiAgICAgICdHcmlsbGVkIG1hcmluYXRlZCBlZ2dwbGFudCwgbW96YXJlbGxhLCBsZXR0dWNlLCBhbmQgdG9tYXRvJ1xuICAgICAgXTtcbiAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgICBjcmVhdGVNZW51SXRlbXMoZW50cmVlSW1hZ2VzLGVudHJlZVByaWNlcyxlbnRyZWVUaXRsZXMsZW50cmVlRGVzY3JpcHRpb25zKTtcbiAgICAgIH07XG4gICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcblxuICAgICAgY29uc3QgZGVzc2VydHMgPSAoKSA9PiB7XG4gICAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cyc7XG4gICAgICBsZXQgZGVzc2VydEltYWdlcyA9IFsndGVzdCcsJ3Rlc3QnLCd0ZXN0JywndGVzdCddO1xuICAgICAgbGV0IGRlc3NlcnRQcmljZXMgPSBbOCw5LDguNSw3LjVdOyBcbiAgICAgIGxldCBkZXNzZXJ0VGl0bGVzID0gWydHZWxhdG8nLCBcbiAgICAgICdUb21hdGUgZHUgc2FsdGFtYmlxdWUnLCdDYW5vbGknLCdQYW5uYSBjb3R0YSddO1xuICAgICAgbGV0IGRlc3NlcnREZXNjcmlwdGlvbnMgPSBbJ1RoaWNrLCByaWNoLCBhbmQgdWx0cmEgY3JlYW15IGdlbGF0bycsXG4gICAgJzEyIGZsYXZvciBzdHVmZmVkIHRvbWF0byBiYXRoZWQgaW4gYSBjcmVtZSBkZSBjYXJhbWVsJyxcbiAgICAnQSBmbGFrZXkgc2hlbGwgd3JhcHBlZCBhcm91bmQgYSBjcmVhbXkgYW5kIHN3ZWV0IHJpY290dGEgZmlsbGluZycsXG4gICAgJ0FuIGFpcnksIGJ1dCBmaXJtIGN1c3RhcmQgdG9wcGVkIHdpdGggYmVycmllcyddO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgY3JlYXRlTWVudUl0ZW1zKGRlc3NlcnRJbWFnZXMsZGVzc2VydFByaWNlcyxkZXNzZXJ0VGl0bGVzLGRlc3NlcnREZXNjcmlwdGlvbnMpO1xuICAgICAgfTtcbiAgICAgIGFwcGV0aXplcnMoKTtcbiAgICAgIGVudHJlZXMoKTtcbiAgICAgIGRlc3NlcnRzKCk7XG4gIH07XG4gICAgbWFpbkNvbnRlbnQoKTtcbiAgfTtcblxuZXhwb3J0IHsgbG9hZE1lbnUgfTsiXSwic291cmNlUm9vdCI6IiJ9