console.log('Максимальный балл 75\n Вёрстка соответствует макету. Ширина экрана 768px +24\n Вёрстка соответствует макету. Ширина экрана 380px +24\n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n');
//For Burger
(function () {
    const burgerItem = document.querySelector('.burger');
    const menuNav = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.navigation__link');
    const menuOutside = document.querySelector('.header__burger_outside');
    burgerItem.addEventListener('click', () => {
        menuNav.classList.add('header__navigation_active');
        document.body.classList.add('_lock');
    });
    menuCloseItem.addEventListener('click', () => {
        menuNav.classList.remove('header__navigation_active');
        document.body.classList.remove('_lock');
    });
    menuOutside.addEventListener('click', () => {
        menuNav.classList.remove('header__navigation_active');
        document.body.classList.remove('_lock');
    });
    if (window.innerWidth <= 699) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menuNav.classList.remove('header__navigation_active');
                document.body.classList.remove('_lock');
            });
        }
    }
}());
