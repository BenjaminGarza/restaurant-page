const loadContactPage = () => {
  const make = (element) => {
    newElement = document.createElement('${element}');
    return newElement;
  }
 let contactTitle = make(h2);
const createForm = () => {
  let contactForm = make(form);

  let divName = make(div);
  let labelName = make(label);
  let inputName = make(input);
  inputName.setAttribute("type","text");
  divName.classList.add("form-div");
  const labelNameContent = document.createTextNode("Name");
  labelName.appendChild(labelNameContent);
  divName.appendChild(labelName);
  divName.appendChild(inputName);
  contactForm.appendChild(divName);



  let divEmail = make(div);
  let labelEmail = make(label);
  let inputEmail = make(input);
  const labelEmailContent = document.createTextNode("Name");

  let divSubject = make(div);
  let labelSubject = make(label);
  let inputEmail = make(input);
  const labelNameContent = document.createTextNode("Name");

  let divMessage = make(div);
  let labelMessage = make(label);
  let inputMessage= make(input);
  const labelNameContent = document.createTextNode("Name");

  let asideResponse = make(aside);
  let labelCheckbox = make(label);
  let inputCheckbox= make(input);
  const labelNameContent = document.createTextNode("Name");
}
 
let divButton = make(div);
let buttonCancel = make(button);
let buttonSubmit = make(button);
};

export { loadContactPage };