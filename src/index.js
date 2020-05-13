import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';
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
      case "Home": Home.initialize();
        console.log("home fire");
        events();
        break;
      case "Menu": Menu.initialize();
        console.log("menu fire");
        events();
        break;
      case "Contact": Contact.initialize()
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


Home.test();
Menu.test();
Contact.test();
Home.initialize();
//document.querySelector('#content').addEventListener('click', function() {console.log(event.target);});


//for tab switching logic
//element.addEventListener("click", function(){ alert("Hello World!"); });