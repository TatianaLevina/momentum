console.log('Максимальный балл 100\n Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css + 12\n Интерактивность, реализуемая через css +20');
//For Burger
(function () {
    const burgerItem = document.querySelector('.burger');
    const menuNav = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.navigation__link');
    burgerItem.addEventListener('click', () => {
        menuNav.classList.add('header__navigation_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menuNav.classList.remove('header__navigation_active');
    });
    if (window.innerWidth <= 380) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menuNav.classList.remove('header__navigation_active');
            });
        }
    }
}());
