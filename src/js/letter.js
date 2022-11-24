let letters = document.querySelectorAll('.hero__letter');

letters.forEach(letter => {
  letter.addEventListener('mouseover', () => {
    letter.classList.add('animated');
    setTimeout(function() {
      letter.classList.remove('animated');
    }, 601);
  });
});