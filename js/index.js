let ww=window.innerWidth,navList=document.querySelector(".navigation__list"),navLinks=Array.from(document.querySelectorAll(".navigation__link"));const upBtn=document.querySelector(".main__up-btn"),header=document.querySelector(".header");window.addEventListener("load",(()=>{header.style.backgroundSize=ww>=768?"1000px 800px":"840px 680px"}));let navToggle=document.querySelector(".navigation__toggler");function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?upBtn.style.display="block":upBtn.style.display="none"}navToggle.addEventListener("click",(()=>{navList.classList.toggle("navigation__list--active"),navToggle.classList.contains("navigation__toggler--active")?navToggle.setAttribute("aria-label","open menu"):navToggle.setAttribute("aria-label","close menu"),navToggle.classList.toggle("navigation__toggler--active")})),navLinks.forEach((t=>{t.addEventListener("click",(()=>{for(let t=0;t<navLinks.length;t++)navLinks[t].classList.remove("navigation__link--active");t.classList.add("navigation__link--active"),navList.classList.toggle("navigation__list--active"),navToggle.classList.toggle("navigation__toggler--active"),navToggle.setAttribute("aria-label","open menu")}))})),window.onload=function(){let t=document.querySelectorAll(".hero__letter"),e=document.querySelector(".hero__description"),l=document.querySelector(".hero__social-list");for(let e=0;e<t.length;e++)setTimeout((()=>{t[e].classList.add("animated","hero__letter--decorated"),setTimeout((()=>{t[e].classList.remove("hero__letter--decorated")}),120)}),25*(5*e+15)),setTimeout((()=>{t[e].classList.remove("animated"),t[e].style.transform="scale(1)"}),25*(5*e+15)+601);setTimeout((()=>{e.style.transform="translateY(0)",e.style.opacity="1",l.style.transform="translateY(0)",l.style.opacity="1"}),3500)},upBtn.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.onscroll=function(){scrollFunction();var t=document.getElementsByClassName("portfolio-item__image-wrapper"),e=document.getElementsByClassName("portfolio-item__title"),l=document.getElementsByClassName("portfolio-item__description"),o=document.getElementsByClassName("portfolio-item__buttons-list");for(let e=0;e<t.length;e++)t[e].getBoundingClientRect().top<=700&&(t[e].style.transform="translateY(0) translateX(0) skewX(0)",t[e].style.opacity="1");for(let t=0;t<e.length;t++)e[t].getBoundingClientRect().top<=800&&(e[t].style.transform="skewX(0) translateX(0) translateY(0)",e[t].style.opacity="1");for(let t=0;t<l.length;t++)l[t].getBoundingClientRect().top<=825&&(l[t].style.transform="skewX(0) translateX(0) translateY(0)",l[t].style.opacity="1");for(let t=0;t<o.length;t++)o[t].getBoundingClientRect().top<=850&&(o[t].style.transform="translateX(0) translateY(0)",o[t].style.opacity="1");const n=document.querySelector(".skills__title"),s=document.querySelectorAll(".skills__item"),a=document.querySelector(".skills__value--html"),i=document.querySelector(".skills__value--css"),r=document.querySelector(".skills__value--js");if(n.getBoundingClientRect().top<=800){n.style.transform="translateX(0) translateY(0)",n.style.opacity="1";for(let t=0;t<s.length;t++)setTimeout((()=>{s[t].style.transform="translateX(0) translateY(0)",s[t].style.opacity="1"}),300*t+300);setTimeout((()=>{a.style.width="90%"}),800),setTimeout((()=>{i.style.width="70%"}),1100),setTimeout((()=>{r.style.width="25%"}),1400)}};