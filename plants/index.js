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

const button = document.querySelectorAll('.button');

const buttonGarden = document.querySelector('.button_garden');
const buttonLawn = document.querySelector('.button_lawn');
const buttonPlanting = document.querySelector('.button_planting');
const cardGarden = document.querySelectorAll('.project_garden');
const cardLawn = document.querySelectorAll('.project_lawn');
const cardPlanting = document.querySelectorAll('.project_planting');

let mapCardButton = new Map([
    [buttonGarden, cardGarden],
    [buttonLawn, cardLawn],
    [buttonPlanting, cardPlanting]
]);

for (let sectionButton of mapCardButton.keys()) {
    sectionButton.addEventListener('click', (e) =>{
    
        e.preventDefault();

        let activeButtonCount = 0;
        for (let button of mapCardButton.keys()) {
            if (button.classList.contains('hover')){
                activeButtonCount += 1;
            }
        }
        if (!sectionButton.classList.contains('hover')){
            if (activeButtonCount > 1){
                return;
            }
            activeButtonCount += 1;
        }
        else {
            activeButtonCount -= 1;
        }
        
        sectionButton.classList.toggle('hover');

        for (let [button, cards] of mapCardButton) {
            if (!button.classList.contains('hover') && activeButtonCount > 0) {
                cards.forEach(element => {
                    element.classList.add('blur-effect');
                }); 
            } else {
                cards.forEach(element => {
                    element.classList.remove('blur-effect');
                }); 
            }
        }
    });
}

