document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.menu-ele').classList.add('show');
  document.querySelector('.list-header').classList.add('show');
  document.querySelector('.hamburger').classList.add('hidden');
});

// document.querySelector('.list-header').addEventListener('click', () => {
//   document.querySelector('.hamburger').classList.remove('show');
//   document.querySelector('.list-header').classList.remove('hidden');
// });
