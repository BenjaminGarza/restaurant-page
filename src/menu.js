const loadMenu = () => {
  let contentDiv = document.querySelector('#content'); 
  let titleDiv = document.createElement('div');
  let titleDivContent = document.createElement('h2');
  titleDivContent.textContent = 'Menu';
  titleDiv.appendChild(titleDivContent);
  contentDiv.appendChild(titleDiv);
  const mainContent = () => {
    let menuSection = document.createElement('section');
    const createMenuItems = (foodImages, foodPrices,foodDescriptions) => {
      for(let i = 0; i < foodImages.length; i++){
        let menuItem = document.createElement('article');
        let photoContainer = document.createElement('figure');
        let placeHolder = document.createTextNode('test');
        photoContainer.appendChild(placeHolder);
        let descriptionContainer = document.createElement('figcaption');
        let description = document.createTextNode(foodDescriptions[i]);
        let prices = document.createTextNode(foodPrices[i]);
        descriptionContainer.appendChild(prices);
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
      let appDescriptions = ['A crispy, tender event',
    'Choose three appetizers to sample, the adventurous choice',
    'Mini calzones, pockets of cheesy goodness',
    'Mozarrella dipped in batter and fried for your delight'
    ];
    menuSection.appendChild(sectionTitle);
    createMenuItems(appImages,appPrices,appDescriptions);
    };
      
    appetizers();
    contentDiv.appendChild(menuSection);
  };

  

  const entrees = () => {
    let sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Entrees';
      let entreeImages = ['test','test','test','test'];
      let entreePrices = [8,9,8.5,7.5]; 
      let entreeDescriptions = ['A crispy, tender event',
    'Choose three appetizers to sample, the adventurous choice',
    'Mini calzones, pockets of cheesy goodness',
    'Mozarrella dipped in batter and fried for your delight'
    ];
    menuSection.appendChild(sectionTitle);
    createMenuItems(entreeImages,entreePrices,entreeDescriptions);
    };
      
    appetizers();
    entrees();
    contentDiv.appendChild(menuSection);
  };

  const desserts = () => {
    let main = mainContent();
    console.log(main), 'main';
  };

  mainContent();
};

export { loadMenu };