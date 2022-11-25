let ww = window.innerWidth;
let navList = document.querySelector('.navigation__list');
let navLinks = Array.from(document.querySelectorAll('.navigation__link'));

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('navigation__link--active');
    }
    link.classList.add('navigation__link--active');
  });
});

let navToggle = document.querySelector('.navigation__toggler');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('navigation__list--active');
  if (navToggle.classList.contains('navigation__toggler--active')) {
    navToggle.setAttribute('aria-label', 'open menu');
  } else {
    navToggle.setAttribute('aria-label', 'close menu');
  }
  navToggle.classList.toggle('navigation__toggler--active');
});

window.onload = function() {
  document.querySelector('.hero__title').style.transform = 'skewX(0) translateX(0)';
};

window.onscroll = function()  {
  var texts = document.getElementsByClassName('section__text-wrapper');
  var images = document.getElementsByClassName('section__image-wrapper');
  var titles = document.getElementsByClassName('section__title');
  var descriptions = document.getElementsByClassName('section__description');
  for(let i = 0; i < texts.length; i++){
    if(texts[i].getBoundingClientRect().top <= 800){
      texts[i].style.transform = 'translateX(0)';
    }
  }
  for(let i = 0; i < images.length; i++){
    if(images[i].getBoundingClientRect().top <= 700){
      images[i].style.transform = 'translateX(0) skewX(0)';
    }
  }
  for(let i = 0; i < titles.length; i++){
    if(titles[i].getBoundingClientRect().top <= 700){
      titles[i].style.transform = 'skewX(0) translateX(0)';
    }
  }
  for(let i = 0; i < descriptions.length; i++){
    if(descriptions[i].getBoundingClientRect().top <= 800){
      descriptions[i].style.transform = 'skewX(0) translateX(0)';
    }
  }
};
