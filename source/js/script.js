// Открытие - закрытие мобильного меню

const mainNavigation = document.querySelector('.main-nav');
const openMainNavigation = document.querySelector('.main-nav__toggle');

openMainNavigation.addEventListener('click', () => {
  mainNavigation.classList.toggle('main-nav--closed')
})

window.addEventListener('click', (evt) => {
  if (evt.target.matches('.main-nav__links a')) {
    mainNavigation.classList.toggle('main-nav--closed')
  }
})


// Открытие - закрытие попапа с полной новостью

const newsPopup = document.querySelector('.popup');
const openNewsPopup = document.querySelectorAll('.news__expand');
const closeNewsPopup = document.querySelector('.popup__close');
const isEscapeKey = (evt) => evt.key === 'Escape';

openNewsPopup.forEach(button => {
  button.addEventListener('click', () => {
    newsPopup.style.display = "block"
  })
})

closeNewsPopup.addEventListener('click', () => {
  newsPopup.style.display = "none"
})

window.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    newsPopup.style.display = "none";
  }
});

// Прокрутка страницы к началу

const topButton = document.querySelector('#scrollToTop')

topButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})


// Вкладки по типам авто

const selectTab = element => {
  const active = document.querySelector('.main-nav__tab--active');
  const visible = document.querySelector('.news__content--visible');
  const tabContent = document.getElementById(element.href.split('#')[1]);
  if (active) {
    active.classList.remove('main-nav__tab--active');
  }
  element.classList.add('main-nav__tab--active');
  if (visible) {
    visible.classList.remove('news__content--visible');
  }
  tabContent.classList.add('news__content--visible');
}

document.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.matches('.main-nav__tabs a')) {
    selectTab(event.target);
  }
}, false);

// Открытие закрытие окна входа-регистрации

const overlay = document.querySelector('.main__overlay')
const loginButton = document.querySelector('#loginButton');
const modal = document.querySelector('.modal');

loginButton.addEventListener('click', () => {
  modal.style.display = "block";
  overlay.style.display = "block"
})

overlay.addEventListener('click', () => {
  modal.style.display = "none";
  overlay.style.display = "none"
})

// Вкладки вход-регистрация

const selectModalTab = element => {
  const active = modal.querySelector('.active');
  const visible = modal.querySelector('.modal__tab--visible');
  const tabContent = document.getElementById(element.href.split('#')[1]);
  if (active) {
    active.classList.remove('active');
  }
  element.classList.add('active');
  if (visible) {
    visible.classList.remove('modal__tab--visible');
  }
  tabContent.classList.add('modal__tab--visible');
}

document.addEventListener('click', event => {
  if (event.target.matches('.modal__tabs-item a')) {
    event.preventDefault();
    selectModalTab(event.target);
  }
  if (event.target.matches('.modal__login a')) {
    event.preventDefault();
    selectModalTab(event.target);
  }
}, false);

window.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    modal.style.display = "none";
  }
});
