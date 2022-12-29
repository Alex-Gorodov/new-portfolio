let ww = window.innerWidth;
let wh = window.innerHeight;
if (ww < 700) {
  wh *= 1.5;
}
let navList = document.querySelector('.navigation__list');
let navLinks = Array.from(document.querySelectorAll('.navigation__link'));
const upBtn = document.querySelector('.main__up-btn');
const navigation = document.querySelector('.navigation');

const logoLink = document.querySelector('.header__logo');
const logoIcon = document.querySelector('.header__icon');

const blops = document.querySelectorAll('.header__blop');
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
    blop.classList.remove('header__blop--preloader');
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
    for(let i = 0; i < heroLetters.length; i++) {
      setTimeout(() => {
        heroLetters[i].classList.add('animated');
      }, (i*5+15)*15);
      setTimeout(() => {
        heroLetters[i].classList.remove('animated');
        heroLetters[i].style.transform = 'scale(1)';
      }, (i*5+15)*15 + 601);
    }
  }, 450);
  setTimeout(() => {
    heroDescription.style.transform = 'translateY(0)';
    heroDescription.style.opacity = '1';
    heroSocial.style.transform = 'translateY(0)';
    heroSocial.style.opacity = '1';
  }, 2000);
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }
}

function navigationTransform() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 0) {
    navigation.classList.add('navigation--minimazed');
  } else {
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
  let descriptions = document.getElementsByClassName('description');
  let portfolioTexts = document.querySelectorAll('.portfolio-item__text-wrapper');
  let portfolioDescriptions = document.querySelectorAll('.portfolio-item__description');
  let portfolioSocials = document.getElementsByClassName('portfolio-item__buttons-list');
  let mobiles = document.getElementsByClassName('portfolio-item__picture--mobile');
  let tablets = document.getElementsByClassName('portfolio-item__picture--tablet');
  let desktops = document.getElementsByClassName('portfolio-item__picture--desktop');

  for(let i = 0; i < titles.length; i++) {
    if(titles[i].getBoundingClientRect().top <= wh / 1.2) {
      titles[i].classList.add('title--animated');
      setTimeout(() => {
        titles[i].style.opacity = '1';
      }, 200);
    }
  }
  for(let i = 0; i < descriptions.length; i++) {
    if(descriptions[i].getBoundingClientRect().top <= wh) {
      setTimeout(() => {
        descriptions[i].style.transform = 'rotateX(0) translateY(0)';
        setTimeout(() => {
          descriptions[i].style.opacity = '1';
        }, 120);
      }, 300);
    }
  }

  // Portfolio
  for(let i = 0; i < images.length; i++) {
    if(images[i].getBoundingClientRect().top <= wh) {
      setTimeout(() => {
        images[i].style.transform = 'translateY(0) translateX(0) skew(0)';
        images[i].style.opacity = '1';
      }, 100);
    }
  }
  for(let i = 0; i < mobiles.length; i++) {
    if(mobiles[i].getBoundingClientRect().top <= wh / 1.6) {
      setTimeout(() => {
        mobiles[i].style.transform = 'translateX(0)';
      }, 300);
    }
  }
  for(let i = 0; i < tablets.length; i++) {
    if(tablets[i].getBoundingClientRect().top <= wh / 1.6) {
      setTimeout(() => {
        tablets[i].style.transform = 'translateX(0)';
      }, 150);
    }
  }
  for(let i = 0; i < desktops.length; i++) {
    if(desktops[i].getBoundingClientRect().top <= wh / 1.6) {
      setTimeout(() => {
        desktops[i].style.transform = 'translateY(0)';
        desktops[i].style.opacity = '1';
      }, 250);
    }
  }
  for(let i = 0; i < portfolioTexts.length; i++) {
    if(portfolioTexts[i].getBoundingClientRect().top <= wh) {
      setTimeout(() => {
        portfolioTexts[i].style.transform = 'translateY(0) translateX(0) skew(0)';
        portfolioTexts[i].style.opacity = '1';
      }, 400);
    }
  }
  for(let i = 0; i < portfolioDescriptions.length; i++) {
    if(portfolioDescriptions[i].getBoundingClientRect().top <= wh) {
      setTimeout(() => {
        portfolioDescriptions[i].style.transform = 'perspective(1000px) rotateX(0) translateY(0em)';
        setTimeout(() => {
          portfolioDescriptions[i].style.opacity = '1';
        }, 120);
      }, 300);
    }
  }
  for(let i = 0; i < portfolioSocials.length; i++) {
    if(portfolioSocials[i].getBoundingClientRect().top <= wh) {
      setTimeout(() => {
        portfolioSocials[i].style.transform = 'perspective(1000px) rotateX(0) translateY(0em)';
        setTimeout(() => {
          portfolioSocials[i].style.opacity = '1';
        }, 120);
      }, 400);
    }
  }

  // Skills
  const skillsTitle = document.querySelector('.skills__title');
  const skillsList = document.querySelectorAll('.skills__item');
  const skillsHtml = document.querySelector('.skills__value--html');
  const skillsCss = document.querySelector('.skills__value--css');
  const skillsJs = document.querySelector('.skills__value--js');
  if(skillsTitle.getBoundingClientRect().top <= wh / 1.6) {
    for (let i = 0; i < skillsList.length; i++) {
      setTimeout(() => {
        skillsList[i].style.transform = 'translateX(0) translateY(0)';
        skillsList[i].style.opacity = '1';
      }, i*100 + 100);
    }
    setTimeout(() => {
      skillsHtml.style.opacity = '1';
      skillsHtml.style.width = '80%';
    }, 1000);
    setTimeout(() => {
      skillsCss.style.opacity = '1';
      skillsCss.style.width = '70%';
    }, 1000);
    setTimeout(() => {
      skillsJs.style.opacity = '1';
      skillsJs.style.width = '25%';
    }, 1000);
  }
};
