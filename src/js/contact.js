const form = document.querySelector('.contact__form');
const labels = document.querySelectorAll('.contact__item');
const inputs = document.querySelectorAll('.contact__field');
const submit = document.querySelector('.contact__submit');
const success = document.querySelector('.modal__success');
const error = document.querySelector('.modal__error');

submit.onclick = function () {
    form.addEventListener('submit', function () {
      success.classList.add('modal--show');
      setTimeout(() => {
        success.style.transition = '0.5s';
        success.classList.remove('modal--show');
      }, 5000);
      success.style.transition = 'cubic-bezier(0, 0.7, 0.2, 1.1) 0.5s';
    });
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].validity.valid) {
            labels[i].classList.add('contact__item--invalid');
            error.classList.add('modal--show');
            setTimeout(() => {
              error.style.transition = '0.5s';
              error.classList.remove('modal--show');
            }, 5000);
            error.style.transition = 'cubic-bezier(0, 0.7, 0.2, 1.1) 0.5s';
        } else {
          labels[i].classList.remove('contact__item--invalid');
        }
    }
};
