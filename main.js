"use strict";

class Header {
  constructor(component) {
    this._initFields(component);
    this._attachEventHandlers();
  }

  _initFields(component) {
    this._component = component;
    this._burger = component.querySelector('.js-header__burger');
    this._menu = component.querySelector('.js-header__menu');
  }

  _handleBurgerClick() {
    this._burger.classList.toggle('header__burger_menu_open');
    this._menu.classList.toggle('header__menu_open');
  }

  _attachEventHandlers() {
    this._burger.addEventListener('click', this._handleBurgerClick.bind(this));
  }
}

const header = document.querySelector('.js-header');
if (header) {
  new Header(header);
}

window.addEventListener('scroll', () => {
  if (this.scrollY > 50) {
    document.querySelector('.js-header').classList.add('header_opaque')
  } else {
    document.querySelector('.js-header').classList.remove('header_opaque')
  }
})

new Glide('.glide', {
  type: 'slider',
  perView: 4,
  gap: 40,
  rewind: false,
  breakpoints: {
    1440: {
      gap: 30,
    },
    1199: {
      gap: 20,
      perView: 3,
    },
    991: {
      gap: 10,
      perView: 3,
    },
    767: {
      perView: 2,
    },
    575: {
      perView: 1,
    }
  }
}).mount();

class Calculator {
  constructor(component) {
    this._initFields(component);
    this._attachEventHandlers();
  }

  _initFields(component) {
    this._component = component;
    this._tabs = component.querySelectorAll('.js-calculator__step');
    this._form = component.querySelector('.js-calculator__form');   
  }

  _showTab(tab) {
    tab.classList.add('active');
  }

  _hideTab(tab) {
    tab.classList.remove('active');
  }

  _attachEventHandlers() {
    [...this._tabs].map((tab, index) => {
      const nextButton = tab.querySelector('.js-calculator__next-button');
      if (nextButton) {
        nextButton.addEventListener('click', () => {
          this._showTab(this._tabs[index + 1]);
          this._hideTab(tab);
        });
      }

      const backButton = tab.querySelector('.js-calculator__back-button');
      if (backButton) {
        backButton.addEventListener('click', () => {
          this._showTab(this._tabs[index - 1]);
          this._hideTab(tab);
        });
      }
    });
    this._form.addEventListener('keydown', (event) => {
      if(event.keyCode == 13) {
        event.preventDefault();
     }
    })
  }
}

const calculator = document.querySelector('.js-calculator');
if (calculator) {
  new Calculator(calculator);
}

const telInputs = document.querySelectorAll('.js-input_phone');
if (telInputs) {
  telInputs.forEach((input) => {
    IMask(input, {
      mask: '+{7}(000)000-00-00'
    });
  });
}