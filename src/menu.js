const loadMenu = () => {
  let titleDiv = document.createElement('div');
  let titleDivContent = document.createElement('h2');
  titleDivContent.textContent = 'Menu';
  titleDiv.appendChild(titleDivContent);
  document.querySelector('#content').appendChild(titleDiv);
  const mainContent = () => {
    let menuSection = document.createElement('section');
    let menuItem = document.createElement('article');
    let photoContainer = document.createElement('figure');
    let descriptionContainer = document.createElement('details');
    return{ menuSection, menuItem, photoContainer, descriptionContainer}
  };

  const appetizers = () => {
    let main = mainContent();
    console.log(main), 'main';

  };

  const entrees = () => {
    
  };

  const desserts = () => {
    
  };

  appetizers();
  
};

export { loadMenu };