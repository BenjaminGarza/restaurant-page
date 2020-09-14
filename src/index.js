import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const clearPage = () => {
  const div = document.querySelector('#content');
  div.innerHTML = '';
};
const addNav = () => {
  const contact = document.createElement('div');
  const menu = document.createElement('div');
  const home = document.createElement('div');
  const div = document.querySelector('#content');
  const nav = document.createElement('nav');
  nav.classList.add('nav-bar');
  home.classList.add('nav-item');
  const addLinks = () => {
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    div.appendChild(nav);
  };
  home.innerText = 'Home';
  home.addEventListener('click', () => {
    clearPage();
    addLinks();
    loadHome();
  });
  menu.innerText = 'Menu';
  menu.classList.add('nav-item');
  menu.addEventListener('click', () => {
    clearPage();
    addLinks();
    loadMenu();
  });
  contact.innerText = 'Contact';
  contact.classList.add('nav-item');
  contact.addEventListener('click', () => {
    clearPage();
    addLinks();
    loadContact();
  });
  addLinks();
};
addNav();
loadHome();