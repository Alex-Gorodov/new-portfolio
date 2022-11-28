let portfolio=[];class PortfolioItem{constructor(t,e,i,o,s,a){this.title=t,this.description=e,this.links=i,this.image=o,this.alt=s,this.parent=document.querySelector(a)}render(){const t=document.createElement("section");portfolio.length%2==0?t.classList.add("section--odd","main__section","section"):t.classList.add("main__section","section"),t.innerHTML=`\n      <div class="section__text-wrapper">\n        <h2 class="section__title">${this.title}</h2>\n        <p class="section__description">${this.description}</p>\n        <ul class="section__buttons-list">\n          <li class="section__button-item">\n            <a href="${this.links[0]}" class="section__button" target="_blank" rel="noopener nofollow" aria-label="To ${this.title} on github">\n              <svg width="24" height="24" fill="currentColor">\n                <use href="img/sprite.svg#github"></use>\n              </svg>\n            </a>\n          </li>\n          <li class="section__button-item">\n            <a href="${this.links[1]}" class="section__button" target="_blank" rel="noopener nofollow" aria-label="To ${this.title} webpage">\n              <svg width="24" height="24" fill="currentColor">\n                <use href="img/sprite.svg#portfolio-link"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class="section__image-wrapper">\n        <picture class="section__picture section__picture--mobile">\n          <source srcset="img/portfolio/${this.image}-mobile.webp 1x, img/portfolio/${this.image}-mobile@2x.webp 2x" type="image/webp">\n          <img class="section__image section__image--mobile" src="img/portfolio/${this.image}.png" width="103" height="206" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">\n        </picture>\n        <picture class="section__picture section__picture--desktop">\n          <source srcset="img/portfolio/${this.image}-desktop.webp 1x, img/portfolio/${this.image}-desktop@2x.webp 2x" type="image/webp">\n          <img class="section__image section__image--desktop" src="img/portfolio/${this.image}.png" width="467" height="371" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">\n        </picture>\n        <picture class="section__picture section__picture--tablet">\n          <source srcset="img/portfolio/${this.image}-tablet.webp 1x, img/portfolio/${this.image}-tablet@2x.webp 2x" type="image/webp">\n          <img class="section__image section__image--tablet" src="img/portfolio/${this.image}.png" width="208" height="306" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">\n        </picture>\n      </div>\n    `,this.parent.append(t),portfolio.push(this.element)}}new PortfolioItem("Bright lights","Landing page of singer. Music player inside.",["https://github.com/Alex-Gorodov/bright-lights","https://alex-gorodov.github.io/bright-lights/"],"bright-lights","Bright Lights",".page__main").render(),new PortfolioItem("CreateX","This is a layout of a site with some courses. The design taken from the Internet.",["https://github.com/Alex-Gorodov/CreateX","https://alex-gorodov.github.io/CreateX/"],"createx","CreateX",".page__main").render(),new PortfolioItem("Cat energy","This is a site for those who want to build a nutrition for their cat.<br> The design belongs to HTML Academy",["https://github.com/Alex-Gorodov/Cat-Energy","https://alex-gorodov.github.io/Cat-Energy/"],"cat-energy","Cat energy",".page__main").render(),new PortfolioItem("Haifa street food","Food market order service. I came across a similar service in Norway, so I got one for my city.",["https://github.com/Alex-Gorodov/Haifa-Street-Food","https://alex-gorodov.github.io/Haifa-Street-Food/"],"haifa","Haifa street food",".page__main").render(),new PortfolioItem("Glaccy","Here they sell ice cream with delivery. Design from HTML Academy, too.",["https://github.com/Alex-Gorodov/Glaccy","https://alex-gorodov.github.io/Glaccy/"],"glaccy","Glaccy",".page__main").render(),new PortfolioItem("Sedona","Some useful information for those who want to go to Sedona. Have you heard about this city? The design belongs to HTML Academy",["https://github.com/htmlacademy-adaptive/590651-sedona-26","https://htmlacademy-adaptive.github.io/590651-sedona-26/11/"],"sedona","Sedona",".page__main").render();