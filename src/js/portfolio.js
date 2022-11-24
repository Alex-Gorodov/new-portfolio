let portfolio = [];

class PortfolioItem {
  constructor (title, description, links, image, alt, parentSelector) {
    this.title = title;
    this.description = description;
    this.links = links;
    this.image = image;
    this.alt = alt;
    this.parent = document.querySelector(parentSelector);
  }
  
  render() {
    const element = document.createElement('section');

    if (portfolio.length % 2 === 0) {
      element.classList.add('section--odd', 'main__section', 'section');
    } else {
      element.classList.add('main__section', 'section');
    }

    element.innerHTML = `
      <div class="section__text-wrapper">
        <h2 class="section__title">${this.title}</h2>
        <p class="section__description">${this.description}</p>
        <ul class="section__buttons-list">
          <li class="section__button-item">
            <a href="${this.links[0]}" class="section__button">
              <svg width="24" height="24" fill="currentColor">
                <use href="img/sprite.svg#github"></use>
              </svg>
            </a>
          </li>
          <li class="section__button-item">
            <a href="${this.links[1]}" class="section__button">
              <svg width="24" height="24" fill="currentColor">
                <use href="img/sprite.svg#portfolio-link"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <picture>
          <source srcset="img/portfolio/${this.image}.webp 1x, img/portfolio/${this.image}@2x.webp 2x" type="image/webp">
          <img src="img/portfolio/${this.image}.png" width="547" height="391" alt="${this.alt}" srcset="img/portfolio/${this.image}@2x.png 2x">
        </picture>
      </div>
    `;
    this.parent.append(element);
    portfolio.push(this.element);
    console.log(portfolio.length);
  }
}

new PortfolioItem(
  'Bright lights',
  'Landing page of an artist',
  ['https://github.com/Alex-Gorodov/bright-lights', 'https://alex-gorodov.github.io/bright-lights/'],
  'bright-lights',
  'Bright Lights',
  '.page__main'
).render();

new PortfolioItem(
  'CreateX',
  'Multi-page site of online education service',
  ['https://github.com/Alex-Gorodov/CreateX', 'https://alex-gorodov.github.io/CreateX/'],
  'createx',
  'CreateX',
  '.page__main'
).render();

new PortfolioItem(
  'Cat energy',
  'Build a nutrition program for your cat\!<br> From HTML Academy',
  ['https://github.com/Alex-Gorodov/Cat-Energy', 'https://alex-gorodov.github.io/Cat-Energy/'],
  'cat-energy',
  'Cat energy',
  '.page__main'
).render();

new PortfolioItem(
  'Device',
  'Gatgets online store<br> From HTML Academy',
  ['https://github.com/Alex-Gorodov/Device', 'https://alex-gorodov.github.io/Device/'],
  'device',
  'Device',
  '.page__main'
).render();

new PortfolioItem(
  'Haifa street food',
  'Food market order service',
  ['https://github.com/Alex-Gorodov/Haifa-Street-Food', 'https://alex-gorodov.github.io/Haifa-Street-Food/'],
  'haifa',
  'Haifa street food',
  '.page__main'
).render();

new PortfolioItem(
  'Glaccy',
  'Ice cream online store<br> From HTML Academy',
  ['https://github.com/Alex-Gorodov/Glaccy', 'https://alex-gorodov.github.io/Glaccy/'],
  'glaccy',
  'Glaccy',
  '.page__main'
).render();

new PortfolioItem(
  'Sedona',
  'Gatgets online store<br> From HTML Academy',
  ['https://github.com/htmlacademy-adaptive/590651-sedona-26', 'https://htmlacademy-adaptive.github.io/590651-sedona-26/11/'],
  'sedona',
  'Sedona',
  '.page__main'
).render();
