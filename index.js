const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

//для кнопк додаємо оброботчик собитий з функцією
//в цій функції відміняється додавання цих слів в те поле
//виходить, що ми кліку на кнопку спрацьовує функція яка відміняє обработчики собитій для блоків
const removeElem = document.querySelector('.remove-handlers-btn');

function removeHandle() {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
}

removeElem.addEventListener('click', removeHandle);

const attachElem = document.querySelector('.attach-handlers-btn');

function attachHandle() {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
}

attachElem.addEventListener('click', attachHandle);

const clearElem = document.querySelector('.clear-btn');

function clearList () {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

clearElem.addEventListener('click', clearList);
