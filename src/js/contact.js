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
        success.classList.remove('modal--show');
      }, 5000);
    });
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].validity.valid) {
            labels[i].classList.add('contact__item--invalid');
            error.classList.add('modal--show');
            setTimeout(() => {
              error.classList.remove('modal--show');
            }, 5000);
        } else {
          labels[i].classList.remove('contact__item--invalid');
        }
    }
};
