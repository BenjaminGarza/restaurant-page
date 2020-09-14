const loadHome = () => {
  const mainDiv = document.querySelector('#content');
  const div = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h2');
  const smallTitle = document.createElement('h4');
  const titleContent = document.createTextNode('Welcome to our restaurant');
  const smallTitleContent = document.createTextNode('The best dessert in town');

  title.classList.add('title-style');
  smallTitle.classList.add('title-style');
  div.classList.add('restaurant-background');
  smallTitle.appendChild(smallTitleContent);
  title.appendChild(titleContent);
  headerDiv.appendChild(title);
  headerDiv.appendChild(smallTitle);
  div.appendChild(headerDiv);
  mainDiv.appendChild(div);
};

export { loadHome };
