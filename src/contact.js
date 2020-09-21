const loadContact = () => {
  const contentDiv = document.querySelector('#content');
  const contactTitle = document.createElement('h2');
  contactTitle.innerHTML = 'Contact us';
  contactTitle.classList.add('contact-title');
  contentDiv.appendChild(contactTitle);
  const contactForm = document.createElement('form');
  contactForm.classList.add('contact-form');


  const createSection = (labelContent, inputType) => {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', 'input');
    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    div.classList.add('form-div');
    const labelContentTextNode = document.createTextNode(labelContent);
    label.appendChild(labelContentTextNode);
    div.appendChild(label);
    div.appendChild(input);
    contactForm.appendChild(div);

    return (div);
  };

  createSection('Name', 'text');
  createSection('Email', 'text');
  createSection('Subject', 'text');
  createSection('Message', 'textarea');


  const asideResponse = document.createElement('aside');
  asideResponse.classList.add('response-checkbox');
  const labelCheckbox = document.createElement('label');
  const labelMessageContent = document.createTextNode('Would you like a response?');
  labelCheckbox.appendChild(labelMessageContent);
  labelCheckbox.htmlFor = 'input';
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  asideResponse.appendChild(labelCheckbox);
  asideResponse.appendChild(inputCheckbox);
  const checkboxMessage = document.createTextNode('Yes');
  asideResponse.appendChild(checkboxMessage);
  contactForm.appendChild(asideResponse);

  contentDiv.appendChild(contactForm);
  const divButton = document.createElement('div');
  const buttonCancel = document.createElement('button');
  buttonCancel.innerHTML = 'Cancel';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.innerHTML = 'Submit';
  buttonCancel.classList.add('contact-button');
  buttonSubmit.classList.add('contact-button');
  divButton.appendChild(buttonCancel);
  divButton.appendChild(buttonSubmit);
  document.querySelector('#content').appendChild(divButton);
};

export default loadContact;