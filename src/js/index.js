let ww = window.innerWidth;
let navList = document.querySelector('.navigation__list');
let navLinks = Array.from(document.querySelectorAll('.navigation__link'));
const upBtn = document.querySelector('.main__up-btn');

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

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('navigation__link--active');
    }
    link.classList.add('navigation__link--active');
    navList.classList.toggle('navigation__list--active');
    navToggle.classList.toggle('navigation__toggler--active');
    navToggle.setAttribute('aria-label', 'open menu');
  });
});

window.onload = function() {
  let heroLetters = document.querySelectorAll('.hero__letter');
  let heroDescription = document.querySelector('.hero__description');
  let heroSocial = document.querySelector('.hero__social-list');
  for(let i = 0; i < heroLetters.length; i++){
    setTimeout(() => {
      heroLetters[i].classList.add('animated', 'hero__letter--decorated');
      heroLetters[i].style.transform = 'scale(1)';
      setTimeout(() => {
        heroLetters[i].classList.remove('hero__letter--decorated');
      }, 120);
    }, (i*5+15)*25);
    setTimeout(() => {
      heroLetters[i].classList.remove('animated');
    }, (i*5+15)*25 + 601);
  }
  setTimeout(() => {
    heroDescription.style.transform = 'translateY(0)';
    heroDescription.style.opacity = '1';
    heroSocial.style.transform = 'translateY(0)';
    heroSocial.style.opacity = '1';
  }, 3500);
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }
}

upBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function()  {
  scrollFunction();
  var images = document.getElementsByClassName('section__image-wrapper');
  var titles = document.getElementsByClassName('section__title');
  var descriptions = document.getElementsByClassName('section__description');
  var portfolioSocials = document.getElementsByClassName('section__buttons-list');
  
  for(let i = 0; i < images.length; i++){
    if(images[i].getBoundingClientRect().top <= 700){
      images[i].style.transform = 'translateY(0) translateX(0) skewX(0)';
      images[i].style.opacity = '1';
    }
  }
  for(let i = 0; i < titles.length; i++){
    if(titles[i].getBoundingClientRect().top <= 800){
      titles[i].style.transform = 'skewX(0) translateX(0) translateY(0)';
      titles[i].style.opacity = '1';
      
    }
  }
  for(let i = 0; i < descriptions.length; i++){
    if(descriptions[i].getBoundingClientRect().top <= 825){
      descriptions[i].style.transform = 'skewX(0) translateX(0) translateY(0)';
      descriptions[i].style.opacity = '1';
      
    }
  }
  for(let i = 0; i < portfolioSocials.length; i++){
    if(portfolioSocials[i].getBoundingClientRect().top <= 850){
      portfolioSocials[i].style.transform = 'translateX(0) translateY(0)';
      portfolioSocials[i].style.opacity = '1';
      
    }
  }
};
