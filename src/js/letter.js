let letters = document.querySelectorAll('.hero__letter');

letters.forEach(letter => {
  letter.addEventListener('mouseover', () => {
    letter.classList.add('animated');
    setTimeout(function() {
      letter.classList.remove('animated');
    }, 601);
  });
  letter.addEventListener('touchmove', (event) => {
    letter.classList.add('animated');
    console.log('touchst');
    setTimeout(function() {
      letter.classList.remove('animated');
    }, 601);
    event.preventDefault();
  });
});