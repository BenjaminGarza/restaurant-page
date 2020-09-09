const loadContactPage = () => {
 let contentDiv = document.querySelector('#content');
 let contactTitle = document.createElement('h2');
 contactTitle.innerHTML = 'Contact us';
 contactTitle.classList.add('contact-title');
 contentDiv.appendChild(contactTitle);
 let contactForm = document.createElement('form');
 contactForm.classList.add('contact-form');


  const createSection = (labelContent, inputType) => {
    let div = document.createElement('div');
    let label = document.createElement('label');
    label.setAttribute('for', 'input')
    let input = document.createElement('input');
    input.setAttribute("type",inputType);
    div.classList.add("form-div");
    const labelContentTextNode = document.createTextNode(labelContent);
    label.appendChild(labelContentTextNode);
    div.appendChild(label);
    div.appendChild(input);
    contactForm.appendChild(div);

    return( div );
  };

  createSection("Name","text");
  createSection("Email","text");
  createSection("Subject","text");
  createSection("Message","textarea");
  

  let asideResponse = document.createElement('aside');
  asideResponse.classList.add("response-checkbox");
  let labelCheckbox = document.createElement('label');
  const labelMessageContent = document.createTextNode("Would you like a response?");
  labelCheckbox.appendChild(labelMessageContent);
  labelCheckbox.htmlFor = 'input';
  let inputCheckbox= document.createElement('input');
  inputCheckbox.type = 'checkbox';
  asideResponse.appendChild(labelCheckbox);
  asideResponse.appendChild(inputCheckbox);
  const checkboxMessage = document.createTextNode("Yes");
  asideResponse.appendChild(checkboxMessage);
  contactForm.appendChild(asideResponse);

  contentDiv.appendChild(contactForm);
let divButton = document.createElement('div');
let buttonCancel = document.createElement('button');
buttonCancel.innerHTML = 'Cancel';
let buttonSubmit = document.createElement('button');
buttonSubmit.innerHTML = 'Submit';
buttonCancel.classList.add('contact-button');
buttonSubmit.classList.add('contact-button');
divButton.appendChild(buttonCancel);
divButton.appendChild(buttonSubmit);
document.querySelector('#content').appendChild(divButton);
};

export { loadContactPage };