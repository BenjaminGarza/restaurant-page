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

export { loadHome };
