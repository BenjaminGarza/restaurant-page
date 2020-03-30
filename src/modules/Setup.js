const Setup = (() => {
  const getImage = () => {
    //Left off here let img = https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260;;
    return { img };
  };
  const setImage = (imgUrl) => {
  let div = document.querySelector('#content');
  console.log(div);
  console.log(imgUrl);
  let img = document.createElement('img');
  img.src = imgUrl;
  div.appendChild(img);
  };
  const getHeadline = () => {
  let headline =`
  <h2 id='headline'>Headline</h2>
  `;
  return { headline };
  };
  const setHeadline = (headline) => {
    let div = document.querySelector('#content');
    console.log(headline);
    div.append(headline.headline);
    };
  const getIntro = () => {
  let intro = `
  <p class='intro-pitch'>Welcome to our wonderful restaurant! You will be amazed at our food and dazzled by our service</p>
  ` ;
  return { intro };
  };
  const setIntro = (intro) => {
    let div = document.querySelector('#content');
    console.log(intro);
    div.append(intro);
  };
  const getIntro2 = () => {
  let intro2 =`
  <p class='intro-pitch2'>Just give us a chance to impress!</p>
  `;
  return { intro2 };
  };
  const setIntro2 = (intro2) => {
    let div = document.querySelector('#content');
    div.append(intro2);
    };
    const initialize = () => {
      setImage(getImage());
      setHeadline(getHeadline())
      setIntro(getIntro());
      setIntro2(getIntro2());
    };
    const test = () => {
      console.log('Setup is being imported! 1');
    };
    return {
     test,
     initialize
    };
  })();
  export default Setup;