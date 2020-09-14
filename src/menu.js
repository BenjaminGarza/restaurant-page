
const loadMenu = () => {
  const contentDiv = document.querySelector('#content');
  const titleDiv = document.createElement('div');
  const titleDivContent = document.createElement('h2');
  titleDivContent.textContent = 'Menu';
  titleDiv.appendChild(titleDivContent);
  contentDiv.appendChild(titleDiv);
  const mainContent = () => {
    const menuSection = document.createElement('section');
    menuSection.classList.add('food-section');
    const createMenuItems = (foodImages, foodPrices, foodNames, foodDescriptions) => {
      for (let i = 0; i < foodImages.length; i += 1) {
        const menuItem = document.createElement('article');
        const photoContainer = document.createElement('figure');
        const img = document.createElement('img');
        img.src = 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Buffalo-Chicken-Tenders-688x1032.jpg';
        img.classList.add('image');
        photoContainer.appendChild(img);
        photoContainer.classList.add('photo-container');
        const descriptionContainer = document.createElement('figcaption');
        const names = document.createTextNode(`${foodNames[i]}: `);
        const br = document.createElement('br');
        const description = document.createTextNode(foodDescriptions[i]);
        const prices = document.createTextNode(`$${foodPrices[i]} `);
        descriptionContainer.classList.add('description');
        descriptionContainer.appendChild(prices);
        descriptionContainer.appendChild(names);
        descriptionContainer.appendChild(br);
        descriptionContainer.appendChild(description);
        menuItem.appendChild(photoContainer);
        menuItem.appendChild(descriptionContainer);
        menuItem.classList.add('menu-item');
        menuSection.appendChild(menuItem);
      }
    };

    const appetizers = () => {
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Appetizers';
      const appImages = ['test', 'test', 'test', 'test'];
      const appPrices = [8, 9, 8.5, 7.5];
      const appTitles = ['Buffalo Chicken Strips',
        'Candied tomatoes on basil leaves', 'Smoked salmon bites', 'Mozarella sticks'];
      const appDescriptions = ['A crispy, tender event',
        'Crunchy toffee and ripe, juicy tomato',
        'Smoked salmon atop cream cheese and crunchy crackers',
        'Mozarrella dipped in batter and fried for your delight',
      ];
      menuSection.appendChild(sectionTitle);
      createMenuItems(appImages, appPrices, appTitles, appDescriptions);
    };

    contentDiv.appendChild(menuSection);
    const entrees = () => {
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Entrees';
      const entreeImages = ['test', 'test', 'test', 'test'];
      const entreePrices = [14, 9, 8.5, 7.5];
      const entreeTitles = ['Tandoori Lamb Pizza', 'Camogli Panino',
        'Bruchetta Classico', 'Vegetariano Panino'];
      const entreeDescriptions = ['Ground lamb, mozzarella, and ricotta on top of a crispy crust',
        'Fresh mozzarella, tomato, basil',
        'Toasted bread with garlic, mozarella, tomatoes and basil drizzled with olive oil',
        'Grilled marinated eggplant, mozarella, lettuce, and tomato',
      ];
      menuSection.appendChild(sectionTitle);
      createMenuItems(entreeImages, entreePrices, entreeTitles, entreeDescriptions);
    };
    contentDiv.appendChild(menuSection);

    const desserts = () => {
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Desserts';
      const dessertImages = ['test', 'test', 'test', 'test'];
      const dessertPrices = [8, 9, 8.5, 7.5];
      const dessertTitles = ['Gelato',
        'Tomate du saltambique', 'Canoli', 'Panna cotta'];
      const dessertDescriptions = ['Thick, rich, and ultra creamy gelato',
        '12 flavor stuffed tomato bathed in a creme de caramel',
        'A flakey shell wrapped around a creamy and sweet ricotta filling',
        'An airy, but firm custard topped with berries'];
      menuSection.appendChild(sectionTitle);
      createMenuItems(dessertImages, dessertPrices, dessertTitles, dessertDescriptions);
    };
    appetizers();
    entrees();
    desserts();
  };
  mainContent();
};

export { loadMenu };