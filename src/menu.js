const loadMenu = () => {
  let contentDiv = document.querySelector('#content'); 
  let titleDiv = document.createElement('div');
  let titleDivContent = document.createElement('h2');
  titleDivContent.textContent = 'Menu';
  titleDiv.appendChild(titleDivContent);
  contentDiv.appendChild(titleDiv);
  const mainContent = () => {
    let menuSection = document.createElement('section');
    const createMenuItems = (foodImages,foodPrices,foodNames,foodDescriptions) => {
      for(let i = 0; i < foodImages.length; i++){
        let menuItem = document.createElement('article');
        let photoContainer = document.createElement('figure');
        let img = document.createElement('img');
        img.src = 'src/images/chickenStrips.jpg';
        console.log(img.src);
        photoContainer.appendChild(img);
        let descriptionContainer = document.createElement('figcaption');
        let names = document.createTextNode(foodNames[i] + ': ');
        let description = document.createTextNode(foodDescriptions[i]);
        let prices = document.createTextNode('$'+ foodPrices[i] + ' ');
        descriptionContainer.appendChild(prices);
        descriptionContainer.appendChild(names);
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
      let appTitles = ['Buffalo Chicken Strips', 
      'Candied tomatoes on basil leaves','Mini calzones','Mozarella sticks'];
      let appDescriptions = ['A crispy, tender event',
    'Crunchy toffee and ripe, juicy tomato',
    'Pockets of cheesy goodness',
    'Mozarrella dipped in batter and fried for your delight'
    ];
    menuSection.appendChild(sectionTitle);
    createMenuItems(appImages,appPrices,appTitles,appDescriptions);
    };
      
    contentDiv.appendChild(menuSection);
    const entrees = () => {
      let sectionTitle = document.createElement('h3');
        sectionTitle.textContent = 'Entrees';
        let entreeImages = ['test','test','test','test'];
        let entreePrices = [14,9,8.5,7.5]; 
        let entreeTitles = ['Tandoori Lamb Pizza','Camogli Panino',
        'Bruchetta Classico', 'Vegetariano Panino'];
        let entreeDescriptions = ['Ground lamb, mozzarella, and ricotta on top of a crispy crust',
      'Fresh mozzarella, tomato, basil',
      'Toasted bread with garlic, mozarella, tomatoes and basil drizzled with olive oil',
      'Grilled marinated eggplant, mozarella, lettuce, and tomato'
      ];
      menuSection.appendChild(sectionTitle);
      createMenuItems(entreeImages,entreePrices,entreeTitles,entreeDescriptions);
      };
      contentDiv.appendChild(menuSection);

      const desserts = () => {
      let sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Desserts';
      let dessertImages = ['test','test','test','test'];
      let dessertPrices = [8,9,8.5,7.5]; 
      let dessertTitles = ['Gelato', 
      'Tomate du saltambique','Canoli','Panna cotta'];
      let dessertDescriptions = ['Thick, rich, and ultra creamy gelato',
    '12 flavor stuffed tomato bathed in a creme de caramel',
    'A flakey shell wrapped around a creamy and sweet ricotta filling',
    'An airy, but firm custard topped with berries'];
    menuSection.appendChild(sectionTitle);
    createMenuItems(dessertImages,dessertPrices,dessertTitles,dessertDescriptions);
      };
      appetizers();
      entrees();
      desserts();
  };
    mainContent();
  };

export { loadMenu };