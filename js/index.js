let ww=window.innerWidth,navList=document.querySelector(".navigation__list"),navLinks=Array.from(document.querySelectorAll(".navigation__link"));const upBtn=document.querySelector(".main__up-btn");navLinks.forEach((t=>{t.addEventListener("click",(()=>{for(let t=0;t<navLinks.length;t++)navLinks[t].classList.remove("navigation__link--active");t.classList.add("navigation__link--active")}))}));let navToggle=document.querySelector(".navigation__toggler");function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?upBtn.style.display="block":upBtn.style.display="none"}navToggle.addEventListener("click",(()=>{navList.classList.toggle("navigation__list--active"),navToggle.classList.contains("navigation__toggler--active")?navToggle.setAttribute("aria-label","open menu"):navToggle.setAttribute("aria-label","close menu"),navToggle.classList.toggle("navigation__toggler--active")})),window.onload=function(){let t=document.querySelectorAll(".hero__letter"),e=document.querySelector(".hero__description");for(let e=0;e<t.length;e++)setTimeout((()=>{t[e].classList.add("animated")}),10*(5*e+15)),setTimeout((()=>{t[e].style.transform="scale(1)",t[e].classList.remove("animated")}),10*(5*e+15)+601);setTimeout((()=>{e.style.lineHeight="24px",e.style.opacity="1"}),600)},upBtn.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.onscroll=function(){scrollFunction();var t=document.getElementsByClassName("section__image-wrapper"),e=document.getElementsByClassName("section__title"),n=document.getElementsByClassName("section__description"),l=document.getElementsByClassName("section__buttons-list");for(let e=0;e<t.length;e++)t[e].getBoundingClientRect().top<=700&&(t[e].style.transform="translateY(0) translateX(0) skewX(0)",t[e].style.opacity="1");for(let t=0;t<e.length;t++)e[t].getBoundingClientRect().top<=800&&(e[t].style.transform="skewX(0) translateX(0) translateY(0)",e[t].style.opacity="1");for(let t=0;t<n.length;t++)n[t].getBoundingClientRect().top<=825&&(n[t].style.transform="skewX(0) translateX(0) translateY(0)",n[t].style.opacity="1");for(let t=0;t<l.length;t++)l[t].getBoundingClientRect().top<=850&&(l[t].style.transform="translateX(0) translateY(0)",l[t].style.opacity="1")};