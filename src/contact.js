const loadContactPage = () => {
  const make = (element) => {
    newElement = document.createElement('${element}');
    return newElement;
  }
 let contactTitle = make(h2);
const createForm = () => {
  let contactForm = make(form);
  const createSection = (labelContent, inputType) => {
    let div = make(div);
    let label = make(label);
    let input = make(input);
    input.setAttribute("type","text");
    div.classList.add("form-div");
    const labelContent = document.createTextNode(labelContent);
    label.appendChild(labelContent);
    div.appendChild(label);
    div.appendChild(input);
    contact.appendChild(div);
  };

  createSection("Name","text");
  createSection("Email","text");
  createSection("Subject","text");
  createSection("Message","text");

  let asideResponse = make(aside);
  let labelCheckbox = make(label);
  let inputCheckbox= make(input);
  const labelMessageContent = document.createTextNode("Would you like a response?");
}
 
let divButton = make(div);
let buttonCancel = make(button);
let buttonSubmit = make(button);
divButton.appendChild(buttonCancel);
divButton.appendChild(buttonSubmit);
};

export { loadContactPage };