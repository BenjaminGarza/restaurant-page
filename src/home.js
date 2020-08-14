const loadHome = () => {
let div = document.querySelector('#content');
let headerDiv = document.createElement('div')
let nav = document.createElement('nav')
let title = document.createElement('h2');
let smallTitle = document.createElement('h4');
let titleContent = document.createTextNode("Welcome to our restaurant");
let smallTitleContent = document.createTextNode("The best dessert in town");

nav.innerHTML = 'Home' + 'Menu' + 'Contact';
smallTitle.appendChild(smallTitleContent);
title.appendChild(titleContent);
div.appendChild(nav);
headerDiv.appendChild(title);
headerDiv.appendChild(smallTitle);
div.appendChild(headerDiv);
console.log('yep, its working');
};

export { loadHome };