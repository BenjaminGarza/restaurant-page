import Setup from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';
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
    Setup.initialize();
  });
  menu.addEventListener('click', function (event) {
    document.querySelector('#content').innerHTML = "";
    setTabs();
    Menu.initialize();
  });
  contact.addEventListener('click', function (event) {
    document.querySelector('#content').innerHTML = "";
    setTabs();
    Contact.initialize();
  });
  div.append(home, menu, contact);
})();
Setup.test();
Menu.test();
Contact.test();
Setup.initialize();


//for tab switching logic
//element.addEventListener("click", function(){ alert("Hello World!"); });