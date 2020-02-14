const getImage = () => {
  let img = `
  <img src ='https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  `
  return { img };
};
const setImage = (img) => {
let div = querySelector('#content');
div.append(img);
};
const getHeadline = () => {
let headline =`
<h2 id='headline'>Headline</h2>
`
return { headline };
};
const setheadline = (headline) => {
  let div = querySelector('#content');
  div.append(headline);
  };
const getIntro = () => {
let intro = `
<p class='intro-pitch'>Welcome to our wonderful restaurant! You will be amazed at our food and dazzled by our service</p>
` 
return { intro };
};
const setIntro = (intro) => {
  let div = querySelector('#content');
  div.append(intro);
};
const getIntro2 = () => {
intro2 =`
<p class='intro-pitch2'>Just give us a chance to impress!</p>
`
return { intro2 };
};
const setIntro2 = (intro2) => {
  let div = querySelector('#content');
  div.append(intro2);
  };