// Открытие - закрытие мобильного меню

const mainNavigation = document.querySelector('.main-nav');
const openMainNavigation = document.querySelector('.main-nav__toggle');

openMainNavigation.addEventListener('click', () => {
  mainNavigation.classList.toggle('main-nav--closed')
})


// Открытие - закрытие попапа с полной новостью

const newsPopup = document.querySelector('.popup');
const openNewsPopup = document.querySelectorAll('.news__expand');
const closeNewsPopup = document.querySelector('.popup__close');

openNewsPopup.forEach(button => {
  button.addEventListener('click', () => {
    newsPopup.style.display = "block"
  })
})

closeNewsPopup.addEventListener('click', () => {
  newsPopup.style.display = "none"
})


// Прокрутка страницы к началу по кнопке скролла

const topButton = document.querySelector('#scrollToTop')

topButton.addEventListener('click', () => {
  window.scrollTo(0 , 1);
})
