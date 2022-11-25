document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.menu-ele').classList.add('show');
  document.querySelector('.list-header').classList.add('show');
  document.querySelector('.hamburger').classList.add('hidden');
  document.querySelector('.close-menu').classList.add('show-menu');
});

document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.menu-ele').classList.remove('show');
  document.querySelector('.menu-ele').classList.add('hidden');
  document.querySelector('.close-menu').classList.remove('show-menu');
  document.querySelector('.hamburger').classList.remove('hidden');
  document.querySelector('.list-header').classList.remove('show');
});
