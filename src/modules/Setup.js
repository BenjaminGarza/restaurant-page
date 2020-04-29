const Setup = (() => {
  const setTabs = () => {
    let div = document.querySelector('#content');
    let home = document.createElement('label');
    let menu = document.createElement('label');
    let contact = document.createElement('label');
    home.classList += "label";
    home.innerText = "Home";
    menu.innerText = "Menu";
    menu.classList += "label";
    console.log(menu.classList);
    contact.innerText = "Contact";
    contact.classList += "label";
    div.append(home, menu, contact);
  };
  const setImage = () => {
  let div = document.querySelector('#content');
  let img = document.createElement('img');
  img.src = "https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/lower-patio.jpg?itok=KGYP49fO";
  img.classList += "background-picture";
  console.log(img.classList);
  div.appendChild(img);
  };
  const getHeadline = () => {
  let headline = document.createElement('h2');
  headline.innerText = "The gem of the desert";
  return { headline };
  };
  const setHeadline = (headline) => {
    let div = document.querySelector('#content');
    div.append(headline.headline);
    };
  const getIntro = () => {
    let intro = document.createElement('h4');
    intro.innerText = "Welcome to our wonderful restaurant! You will be amazed at our food and dazzled by our service";
    return { intro };
  };
  const setIntro = (intro) => {
    let div = document.querySelector('#content');
    div.append(intro.intro);
  };
    const getIntro2 = () => {
      let intro2 = document.createElement('h4');
      intro2.innerText = "Just give us a chance to impress!";
      return { intro2 };
    };
    const setIntro2 = (intro2) => {
      let div = document.querySelector('#content');
      div.append(intro2.intro2);
    };
    const initialize = () => {
      setTabs();
      setImage();
      setHeadline(getHeadline())
      setIntro(getIntro());
      setIntro2(getIntro2());
    };
    const test = () => {
      console.log('Setup is ');
    };
    return {
     test,
     initialize
    };
  })();
  export default Setup;