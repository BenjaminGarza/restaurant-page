const loadMenu = () => {
  let titleDiv = document.createElement('div');
  let titleDivContent = document.createElement('h2');
  titleDivContent.textContent = 'Menu';
  titleDiv.appendChild(titleDivContent);
  document.querySelector('#content').appendChild(titleDiv);
  const mainContent = () => {
    //let menuSection = document.createElement('section');
    //let menuItem = document.createElement('article');
    //let photoContainer = document.createElement('figure');
    //let descriptionContainer = document.createElement('details');
    
  };

  const appetizers = () => {
    let main = mainContent();
    console.log(main), 'main';

    let apps = ['','',''];
    let appImages = [];
    let appPrices = [8,9,8.5,7.5]; 
    let appDescriptions = ['A crispy, tender event',
  'Choose three appetizers to sample, the adventurous choice',
  'Mini calzones, pockets of cheesy goodness',
  'Mozarrella dipped in batter and fried for your delight'
  ];

  for(let i=0; i<apps.length; i++){
    let menuItem = document.createElement('section');
    let imgDiv = document.createElement('div');
   
  };

  };

  const entrees = () => {
    let main = mainContent();
    console.log(main), 'main';
  };

  const desserts = () => {
    let main = mainContent();
    console.log(main), 'main';
  };

  appetizers();
  
};

export { loadMenu };