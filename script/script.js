const body = document.querySelector('body');
const burgerBtn = document.querySelector('#burgerBtn');
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');

burgerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  header.classList.toggle('active');
  body.classList.toggle('no-scrolling');
});