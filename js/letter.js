let letters=document.querySelectorAll(".letter");letters.forEach((e=>{e.addEventListener("mouseover",(()=>{e.classList.add("animated"),setTimeout((function(){e.classList.remove("animated")}),601)})),e.addEventListener("touchmove",(t=>{e.classList.add("animated"),setTimeout((function(){e.classList.remove("animated")}),601),t.preventDefault()}))}));