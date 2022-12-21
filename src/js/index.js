let ww = window.innerWidth;
let navList = document.querySelector('.navigation__list');
let navLinks = Array.from(document.querySelectorAll('.navigation__link'));
const upBtn = document.querySelector('.main__up-btn');
const navigation = document.querySelector('.navigation');

const logoLink = document.querySelector('.header__logo');
const logoIcon = document.querySelector('.header__icon');

const blops = document.querySelectorAll('.page__blop');
const blopAnimate = document.querySelector('animate');

let heroLetters = document.querySelectorAll('.hero__letter');
let heroDescription = document.querySelector('.hero__description');
let heroSocial = document.querySelector('.hero__social-list');

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
  blops.forEach(blop => {
    blop.classList.remove('page__blop--preloader');
  });
  blopAnimate.setAttribute('dur', '10s');

  for (let i = 0; i < navLinks.length; i++) {
    setTimeout(() => {
      setTimeout(() => {
        navLinks[i].classList.add('navigation__link--loaded');
      }, i * 300);
      navLinks[0].classList.add('navigation__link--active');
    }, 1000);
  }

  setTimeout(() => {
    for(let i = 0; i < heroLetters.length; i++){
      setTimeout(() => {
        heroLetters[i].classList.add('animated', 'hero__letter--decorated');
        setTimeout(() => {
          heroLetters[i].classList.remove('hero__letter--decorated');
        }, 120);
      }, (i*5+15)*25);
      setTimeout(() => {
        heroLetters[i].classList.remove('animated');
        heroLetters[i].style.transform = 'scale(1)';
      }, (i*5+15)*25 + 601);
    }
  }, 250);
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

function navigationTransform() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    logoLink.classList.add('header__logo--minimazed');
    logoIcon.classList.add('header__icon--minimazed');
    navigation.classList.add('navigation--minimazed');
  } else {
    logoLink.classList.remove('header__logo--minimazed');
    logoIcon.classList.remove('header__icon--minimazed');
    navigation.classList.remove('navigation--minimazed');
  }
}

upBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function()  {
  fieldsScroll();
  scrollFunction();
  navigationTransform();
  let titles = document.querySelectorAll('.title');
  let images = document.getElementsByClassName('portfolio-item__image-wrapper');
  let portfoliotitles = document.getElementsByClassName('portfolio-item__title');
  let descriptions = document.getElementsByClassName('description');
  let portfolioSocials = document.getElementsByClassName('portfolio-item__buttons-list');
  let mobiles = document.getElementsByClassName('portfolio-item__picture--mobile');
  let tablets = document.getElementsByClassName('portfolio-item__picture--tablet');

  for(let i = 0; i < titles.length; i++){
    if(titles[i].getBoundingClientRect().top <= 700){
      titles[i].classList.add('title--animated');
      setTimeout(() => {
        titles[i].style.opacity = '1';
      }, 200);
    }
  }

  // Portfolio
  for(let i = 0; i < images.length; i++){
    if(images[i].getBoundingClientRect().top <= 900){
      images[i].style.transform = 'translateY(0) translateX(0) skew(0)';
      images[i].style.opacity = '1';
    }
  }
  for(let i = 0; i < mobiles.length; i++){
    if(mobiles[i].getBoundingClientRect().top <= 800){
      setTimeout(() => {
        mobiles[i].style.transform = 'translateX(0)';
      }, 300);
    }
  }
  for(let i = 0; i < tablets.length; i++){
    if(tablets[i].getBoundingClientRect().top <= 800){
      setTimeout(() => {
        tablets[i].style.transform = 'translateX(0)';
      }, 150);
    }
  }
  
  for(let i = 0; i < portfoliotitles.length; i++){
    if(portfoliotitles[i].getBoundingClientRect().top <= 800){
      setTimeout(() => {
        portfoliotitles[i].classList.add('portfolio-item__title--animated');
        portfoliotitles[i].style.opacity = '1';
      }, 200);
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

  // Skills
  const skillsTitle = document.querySelector('.skills__title');
  const skillsList = document.querySelectorAll('.skills__item');
  const skillsHtml = document.querySelector('.skills__value--html');
  const skillsCss = document.querySelector('.skills__value--css');
  const skillsJs = document.querySelector('.skills__value--js');
  if(skillsTitle.getBoundingClientRect().top <= 1000){
    for (let i = 0; i < skillsList.length; i++) {
      setTimeout(() => {
        skillsList[i].style.transform = 'translateX(0) translateY(0)';
        skillsList[i].style.opacity = '1';
      }, i*300 + 300);
    }
    setTimeout(() => {
      skillsHtml.style.opacity = '1';
      skillsHtml.style.width = '80%';
    }, 1200);
    setTimeout(() => {
      skillsCss.style.opacity = '1';
      skillsCss.style.width = '70%';
    }, 1400);
    setTimeout(() => {
      skillsJs.style.opacity = '1';
      skillsJs.style.width = '25%';
    }, 1600);
  }
};
