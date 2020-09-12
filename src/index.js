import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact'; 

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
    loadHome();
  });
  let menu = document.createElement('div');
  menu.innerText = 'Menu';
  menu.classList.add('nav-item')
  menu.addEventListener('click',function(){
    clearPage();
    addLinks();
    loadMenu();
  });
  let contact = document.createElement('div');
  contact.innerText = 'Contact';
  contact.classList.add('nav-item')
  contact.addEventListener('click',function(){
    clearPage();
    addLinks();
    loadContact();
  });
  addLinks();
};

addNav();
loadHome();