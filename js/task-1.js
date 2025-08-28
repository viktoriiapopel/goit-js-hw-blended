const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close');

burger.addEventListener('click', () => {
  nav.classList.add('open');
  burger.style.display = 'none';
  console.log(`close`);
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
  burger.style.display = 'block';
  console.log(`open`);
});

// Відкриття і закриття меню
