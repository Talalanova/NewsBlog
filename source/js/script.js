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
