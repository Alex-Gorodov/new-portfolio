let portfolio=[];class PortfolioItem{constructor(t,o,e,i,r,a){this.title=t,this.description=o,this.links=e,this.image=i,this.alt=r,this.parent=document.querySelector(a)}render(){const t=document.createElement("div");t.classList.add("portfolio-item"),portfolio.length%2==1&&t.classList.add("portfolio-item--gradient"),portfolio.length%4==1&&t.classList.add("portfolio-item--gradient-returned"),t.innerHTML=`\n      <div class="portfolio-item__text-wrapper">\n        <a class="portfolio-item__title" href="${this.links[1]}" target="_blank" rel="noopener nofollow" aria-label="To ${this.title} webpage">${this.title}</a>\n        <p class="portfolio-item__description">${this.description}</p>\n        <ul class="portfolio-item__buttons-list">\n          <li class="portfolio-item__button-item">\n            <a href="${this.links[0]}" class="portfolio-item__button" target="_blank" rel="noopener nofollow" aria-label="To ${this.title} on github">\n              <svg width="24" height="24" fill="currentColor">\n                <use href="img/sprite.svg#github"></use>\n              </svg>\n            </a>\n          </li>\n          <li class="portfolio-item__button-item">\n            <a href="${this.links[1]}" class="portfolio-item__button" target="_blank" rel="noopener nofollow" aria-label="To ${this.title} webpage">\n              <svg width="24" height="24" fill="currentColor">\n                <use href="img/sprite.svg#portfolio-link"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class="portfolio-item__image-wrapper">\n        <picture class="portfolio-item__picture portfolio-item__picture--mobile">\n          <source srcset="img/portfolio/${this.image}-mobile.webp 1x, img/portfolio/${this.image}-mobile@2x.webp 2x" type="image/webp">\n          <img class="portfolio-item__image portfolio-item__image--mobile" src="img/portfolio/${this.image}.png" width="103" height="206" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">\n        </picture>\n        <picture class="portfolio-item__picture portfolio-item__picture--desktop">\n          <source srcset="img/portfolio/${this.image}-desktop.webp 1x, img/portfolio/${this.image}-desktop@2x.webp 2x" type="image/webp">\n          <img class="portfolio-item__image portfolio-item__image--desktop" src="img/portfolio/${this.image}.png" width="467" height="371" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">\n        </picture>\n        <picture class="portfolio-item__picture portfolio-item__picture--tablet">\n          <source srcset="img/portfolio/${this.image}-tablet.webp 1x, img/portfolio/${this.image}-tablet@2x.webp 2x" type="image/webp">\n          <img class="portfolio-item__image portfolio-item__image--tablet" src="img/portfolio/${this.image}.png" width="208" height="306" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">\n        </picture>\n      </div>\n    `,this.parent.append(t),portfolio.push(this.element)}}new PortfolioItem("Bright lights","Landing page of singer. Music player inside.",["https://github.com/Alex-Gorodov/bright-lights","https://alex-gorodov.github.io/bright-lights/"],"bright-lights","Bright Lights",".portfolio").render(),new PortfolioItem("CreateX","This is a layout of a site with some courses. The design taken from the Internet.",["https://github.com/Alex-Gorodov/CreateX","https://alex-gorodov.github.io/CreateX/"],"createx","CreateX",".portfolio").render(),new PortfolioItem("Cat energy",'This is a site for those who want to build a nutrition for their cat.<br> The design belongs to <a class="html-academy" href="https://htmlacademy.ru" target="_blank" rel="noopener nofollow" aria-label="To HTML Academy site">HTML&nbsp;Academy</a>.',["https://github.com/Alex-Gorodov/Cat-Energy","https://alex-gorodov.github.io/Cat-Energy/"],"cat-energy","Cat energy",".portfolio").render(),new PortfolioItem("Haifa street food","Food market order service. I came across a similar service in Norway, so I got one for my city.",["https://github.com/Alex-Gorodov/Haifa-Street-Food","https://alex-gorodov.github.io/Haifa-Street-Food/"],"haifa","Haifa street food",".portfolio").render(),new PortfolioItem("Glaccy",'Here they sell ice cream with delivery. The design belongs to <a class="html-academy" href="https://htmlacademy.ru" target="_blank" rel="noopener nofollow" aria-label="To HTML Academy site">HTML&nbsp;Academy</a>.',["https://github.com/Alex-Gorodov/Glaccy","https://alex-gorodov.github.io/Glaccy/"],"glaccy","Glaccy",".portfolio").render(),new PortfolioItem("Sedona",'Some useful information for those who want to go to Sedona. Have you heard about this city? The design belongs to <a class="html-academy" href="https://htmlacademy.ru" target="_blank" rel="noopener nofollow" aria-label="To HTML Academy site">HTML&nbsp;Academy</a>.',["https://github.com/htmlacademy-adaptive/590651-sedona-26","https://htmlacademy-adaptive.github.io/590651-sedona-26/11/"],"sedona","Sedona",".portfolio").render();