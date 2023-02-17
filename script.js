'use strict';
const modal = document.querySelector('.modal'); //we select an element using selector and store the selected element in this variable
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModel = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); //we are not selecting anything, so we don't need any dot. (dot is only for the selector)
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden'); //add hidden class back on
  overlay.classList.add('hidden');
};

//array of buttons
const btnsOpenModal = document.querySelectorAll('.show-modal'); //when we use this selectors to select elements that share the same class, only the first one will be selected
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener('click', openModel));

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (event) {
  //THIS EVENT HAPPENS FOR ALL THE KEYS;
  //console.log('A key was pressed');
  //as the event occurs, js will call the function with this event clickked; call this function when a keydown happens and pass an argument for ESC
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
