console.log('Максимальный балл 100\n При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n В разделе contacts реализован select с выбором городов +0\n\n');
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

const content = document.querySelectorAll('.accordion__body');
const accordion = document.querySelectorAll('.accordion');
const arrows = Array.from(document.querySelectorAll('.accordion__arrow'));

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", () => {
        for (let j = 0; j < content.length; j++) {
            if (i == j) {
                content[j].classList.toggle('accordion__body_open');
                accordion[j].classList.toggle('accordion__item_open');
                arrows[j].classList.toggle('prices-accordion__arrow_open');
            } else {
                content[j].classList.remove('accordion__body_open');
                accordion[j].classList.remove('accordion__item_open');
                arrows[j].classList.remove('prices-accordion__arrow_open');
            }
        }
    });
}

