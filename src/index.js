import Setup from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';
console.log("Index is a go");
const setTabs = () => {
  let div = document.querySelector('#content');
  let home = document.createElement('label');
  let menu = document.createElement('label');
  let contact = document.createElement('label');
  home.id = ("home");
  home.classList += "label";
  home.innerText = "Home";
  menu.id = ("menu");
  menu.innerText = "Menu";
  menu.classList += "label";
  console.log(menu.classList);
  contact.id = ("contact");
  contact.innerText = "Contact";
  contact.classList += "label";
  div.append(home, menu, contact);
};
setTabs();
const events = (() => {
  let home = document.querySelector('#home');
  let menu = document.querySelector('#menu');
  let contact = document.querySelector('#contact');
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
})();


Setup.test();
Menu.test();
Contact.test();
Setup.initialize();


//for tab switching logic
//element.addEventListener("click", function(){ alert("Hello World!"); });