import './style.css';

// js
const $accordion = document.getElementById('accordion');
let activeButton = null;
let activeArrow = null;

$accordion.addEventListener('click', (event) => {
  const target = event.target;
  console.log(target);
  if (target.tagName.toLowerCase() === 'button') {
    const elementSibling = target.nextElementSibling;
    const elementChildren = target.children[0];
    console.log(elementChildren);
    // if (activeButton) {
    //   activeButton.classList.remove('open');
    //   activeArrow.classList.remove('arrow-active');
    // }
    // elementSibling.classList.add('open');
    // elementChildren.classList.add('arrow-active');

    // activeButton = elementSibling;
    // activeArrow = elementChildren;

    if (activeButton === elementSibling) {
      elementSibling.classList.toggle('open');
      elementChildren.classList.toggle('arrow-active');
      activeButton = null;
      activeArrow = null;
    } else {
      if (activeButton) {
        activeButton.classList.remove('open');
        activeArrow.classList.remove('arrow-active');
      }
      elementSibling.classList.add('open');
      elementChildren.classList.add('arrow-active');
      activeButton = elementSibling;
      activeArrow = elementChildren;
    }
  }
});

// TODO: revisar el nuevo codigo
