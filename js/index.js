let ww=window.innerWidth,navList=document.querySelector(".navigation__list"),navLinks=Array.from(document.querySelectorAll(".navigation__link"));const upBtn=document.querySelector(".main__up-btn"),navigation=document.querySelector(".navigation"),logoLink=document.querySelector(".header__logo"),logoIcon=document.querySelector(".header__icon"),blops=document.querySelectorAll(".page__blop"),blopAnimate=document.querySelector("animate");let heroLetters=document.querySelectorAll(".hero__letter"),heroDescription=document.querySelector(".hero__description"),heroSocial=document.querySelector(".hero__social-list"),navToggle=document.querySelector(".navigation__toggler");function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?upBtn.style.display="block":upBtn.style.display="none"}function navigationTransform(){document.body.scrollTop>200||document.documentElement.scrollTop>200?(logoLink.classList.add("header__logo--minimazed"),logoIcon.classList.add("header__icon--minimazed"),navigation.classList.add("navigation--minimazed")):(logoLink.classList.remove("header__logo--minimazed"),logoIcon.classList.remove("header__icon--minimazed"),navigation.classList.remove("navigation--minimazed"))}navToggle.addEventListener("click",(()=>{navList.classList.toggle("navigation__list--active"),navToggle.classList.contains("navigation__toggler--active")?navToggle.setAttribute("aria-label","open menu"):navToggle.setAttribute("aria-label","close menu"),navToggle.classList.toggle("navigation__toggler--active")})),navLinks.forEach((e=>{e.addEventListener("click",(()=>{for(let e=0;e<navLinks.length;e++)navLinks[e].classList.remove("navigation__link--active");e.classList.add("navigation__link--active"),navList.classList.toggle("navigation__list--active"),navToggle.classList.toggle("navigation__toggler--active"),navToggle.setAttribute("aria-label","open menu")}))})),window.onload=function(){blops.forEach((e=>{e.classList.remove("page__blop--preloader")})),blopAnimate.setAttribute("dur","10s");for(let e=0;e<navLinks.length;e++)setTimeout((()=>{setTimeout((()=>{navLinks[e].classList.add("navigation__link--loaded")}),300*e),navLinks[0].classList.add("navigation__link--active")}),1e3);setTimeout((()=>{for(let e=0;e<heroLetters.length;e++)setTimeout((()=>{heroLetters[e].classList.add("animated","hero__letter--decorated"),setTimeout((()=>{heroLetters[e].classList.remove("hero__letter--decorated")}),120)}),25*(5*e+15)),setTimeout((()=>{heroLetters[e].classList.remove("animated"),heroLetters[e].style.transform="scale(1)"}),25*(5*e+15)+601)}),250),setTimeout((()=>{heroDescription.style.transform="translateY(0)",heroDescription.style.opacity="1",heroSocial.style.transform="translateY(0)",heroSocial.style.opacity="1"}),3500)},upBtn.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.onscroll=function(){fieldsScroll(),scrollFunction(),navigationTransform();let e=document.querySelectorAll(".title"),t=document.getElementsByClassName("portfolio-item__image-wrapper"),o=document.getElementsByClassName("description"),l=document.querySelectorAll(".portfolio-item__text-wrapper"),n=document.querySelectorAll(".portfolio-item__description"),i=document.getElementsByClassName("portfolio-item__buttons-list"),s=document.getElementsByClassName("portfolio-item__picture--mobile"),a=document.getElementsByClassName("portfolio-item__picture--tablet");for(let t=0;t<e.length;t++)e[t].getBoundingClientRect().top<=700&&(e[t].classList.add("title--animated"),setTimeout((()=>{e[t].style.opacity="1"}),200));for(let e=0;e<t.length;e++)t[e].getBoundingClientRect().top<=900&&(t[e].style.transform="translateY(0) translateX(0) skew(0)",t[e].style.opacity="1");for(let e=0;e<s.length;e++)s[e].getBoundingClientRect().top<=800&&setTimeout((()=>{s[e].style.transform="translateX(0)"}),300);for(let e=0;e<a.length;e++)a[e].getBoundingClientRect().top<=800&&setTimeout((()=>{a[e].style.transform="translateX(0)"}),150);for(let e=0;e<l.length;e++)l[e].getBoundingClientRect().top<=700&&setTimeout((()=>{l[e].style.transform="translateY(0) translateX(0) skew(0)",l[e].style.opacity="1"}),200);for(let e=0;e<o.length;e++)o[e].getBoundingClientRect().top<=700&&setTimeout((()=>{o[e].style.transform="rotateX(0) translateY(0)",setTimeout((()=>{o[e].style.opacity="1"}),120)}),300);for(let e=0;e<n.length;e++)n[e].getBoundingClientRect().top<=700&&setTimeout((()=>{n[e].style.transform="rotateX(0) translateY(0)",setTimeout((()=>{n[e].style.opacity="1"}),120)}),900);for(let e=0;e<i.length;e++){i[e].getBoundingClientRect().top<=850&&setTimeout((()=>{i[e].style.transform="rotateX(0) translateY(0)",setTimeout((()=>{i[e].style.opacity="1"}),120)}),1e3);const t=document.querySelector(".skills__title"),o=document.querySelectorAll(".skills__item"),l=document.querySelector(".skills__value--html"),n=document.querySelector(".skills__value--css"),s=document.querySelector(".skills__value--js");if(t.getBoundingClientRect().top<=1e3){for(let e=0;e<o.length;e++)setTimeout((()=>{o[e].style.transform="translateX(0) translateY(0)",o[e].style.opacity="1"}),300*e+300);setTimeout((()=>{l.style.opacity="1",l.style.width="80%"}),1200),setTimeout((()=>{n.style.opacity="1",n.style.width="70%"}),1400),setTimeout((()=>{s.style.opacity="1",s.style.width="25%"}),1600)}}};