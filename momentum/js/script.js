
const time = document.querySelector('.time');
const dateFull = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const inputName = document.querySelector('.name');
const body = document.body;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');


//Add time 
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime();

//Add month, day...
function showDate() {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-US', options);
    dateFull.textContent = currentDate;
}
//Add Welcome phrase 

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else if (hours >= 18 && hours <= 23) {
        return 'evening';
    } else if (hours >= 0 && hours < 6) {
        return 'night';
    } else return 'morning';

}
function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

inputName.addEventListener('click', setLocalStorage);

function setLocalStorage() {
    localStorage.setItem('inputName', inputName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('inputName')) {
        inputName.value = localStorage.getItem('inputName');
    }
}
window.addEventListener('load', getLocalStorage);

//Background

function getRandomNum(min, max) {
    return Math.floor(min + Math.random() * (max));
}
let randomNum = getRandomNum(1, 20);
function setBg() {
    const timeOfDay = getTimeOfDay();
    let bgNum = randomNum;
    if (bgNum < 10) {
        bgNum = bgNum.toString().padStart(2, "0");
    } else {
        bgNum.toString();
    }
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/TatianaLevina/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/TatianaLevina/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    };
}

function getSlideNext() {
    if (randomNum === 20) {
        randomNum = 1;
        setBg();
    } else {
        randomNum += 1;
        setBg();
    }
}
function getSlidePrev() {
    if (randomNum === 1) {
        randomNum = 20;
        setBg();
    } else {
        randomNum -= 1;
        setBg();
    }
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
