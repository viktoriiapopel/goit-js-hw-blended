document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelector('.nav').classList.remove('open');
  }
});

// закриття по Escape
