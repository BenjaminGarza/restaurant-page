const loadContactPage = () => {
 
 let contactTitle = document.createElement('h2');
 contactTitle.innerHTML = 'Contact us';
 console.log(contactTitle);
 document.querySelector('#content').appendChild(contactTitle);

const createForm = () => {
  let contactForm = document.createElement('form');
  const createSection = (labelContent, inputType) => {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.setAttribute("type","text");
    div.classList.add("form-div");
    const labelContentTextNode = document.createTextNode(labelContent);
    label.appendChild(labelContentTextNode);
    div.appendChild(label);
    div.appendChild(input);
    contact.appendChild(div);
  };

  createSection("Name","text");
  createSection("Email","text");
  createSection("Subject","text");
  createSection("Message","textarea");

  let asideResponse = document.createElement('aside');
  asideResponse.classList.add("response");
  let labelCheckbox = document.createElement('label');
  let inputCheckbox= document.createElement('input');
  const labelMessageContent = document.createTextNode("Would you like a response?");
}
 
let divButton = document.createElement(div);
let buttonCancel = document.createElement(button);
let buttonSubmit = document.createElement(button);
divButton.appendChild(buttonCancel);
divButton.appendChild(buttonSubmit);
};

export { loadContactPage };