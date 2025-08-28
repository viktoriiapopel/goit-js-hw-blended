const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close');

burger.addEventListener('click', () => {
  nav.classList.add('open');
  console.log(`close`);
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
  console.log(`open`);
});

// Відкриття і закриття меню
