let ww=window.innerWidth,navList=document.querySelector(".navigation__list"),navLinks=Array.from(document.querySelectorAll(".navigation__link"));const upBtn=document.querySelector(".main__up-btn");navLinks.forEach((e=>{e.addEventListener("click",(()=>{for(let e=0;e<navLinks.length;e++)navLinks[e].classList.remove("navigation__link--active");e.classList.add("navigation__link--active")}))}));let navToggle=document.querySelector(".navigation__toggler");function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?upBtn.style.display="block":upBtn.style.display="none"}function iOS(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)}navToggle.addEventListener("click",(()=>{navList.classList.toggle("navigation__list--active"),navToggle.classList.contains("navigation__toggler--active")?navToggle.setAttribute("aria-label","open menu"):navToggle.setAttribute("aria-label","close menu"),navToggle.classList.toggle("navigation__toggler--active")})),window.onload=function(){let e=document.querySelectorAll(".hero__letter"),t=document.querySelector(".hero__description");for(let t=0;t<e.length;t++)setTimeout((()=>{e[t].style.transform="skewX(0) scale(1)",e[t].classList.add("animated"),setTimeout((function(){e[t].classList.remove("animated")}),50)}),10*(5*t+15));setTimeout((()=>{t.style.lineHeight="24px",t.style.opacity="1"}),500)},upBtn.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.onscroll=function(){scrollFunction();var e=document.getElementsByClassName("section__text-wrapper"),t=document.getElementsByClassName("section__image-wrapper"),n=(document.getElementsByClassName("section__picture--mobile"),document.getElementsByClassName("section__title")),o=document.getElementsByClassName("section__description");for(let t=0;t<e.length;t++)e[t].getBoundingClientRect().top<=800&&(e[t].style.transform="translateX(0)");for(let e=0;e<t.length;e++)t[e].getBoundingClientRect().top<=700&&(t[e].style.transform="translateX(0) skewX(0)");for(let e=0;e<n.length;e++)n[e].getBoundingClientRect().top<=700&&(n[e].style.transform="skewX(0) translateX(0)");for(let e=0;e<o.length;e++)o[e].getBoundingClientRect().top<=800&&(o[e].style.transform="skewX(0) translateX(0)",setTimeout((()=>{o[e].style.lineHeight="24px"}),500))},!0===iOS()&&(document.querySelector(".page").style.backgroundAttachment="unset"),console.log(iOS());