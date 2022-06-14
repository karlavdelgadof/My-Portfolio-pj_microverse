const hmgIcon = document.querySelector('.hmg-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const closeBtn = document.querySelector('.close');

hmgIcon.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('.close').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));