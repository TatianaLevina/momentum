
const time = document.querySelector('.time');
const dateFull = document.querySelector('.date');

const greeting = document.querySelector('.greeting');
const inputName = document.querySelector('.name');
const body = document.body;

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const inputCity = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btnChangeQuote = document.querySelector('.change-quote');

//Local storage
inputName.addEventListener('click', setLocalStorage);
inputCity.addEventListener('click', setLocalStorage);

function setLocalStorage() {
    localStorage.setItem('inputName', inputName.value);
    localStorage.setItem('inputCity', inputCity.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('inputName')) {
        inputName.value = localStorage.getItem('inputName');
    }
    if (localStorage.getItem('inputCity')) {
        inputCity.value = localStorage.getItem('inputCity');
    }
}
window.addEventListener('load', getLocalStorage);


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

//Add weather

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=ru&appid=0449508d9f0392966aa921f5f8fcee92&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        inputCity.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
inputCity.addEventListener('keypress', setCity);

//Add quotes
let randomNumQuote = getRandomNum(0, 1642);

async function getQuotes(num) {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = `${data[num].text}`;
    author.textContent = `${data[num].author}`;
}
getQuotes(randomNumQuote);

btnChangeQuote.addEventListener('click', () => {
    randomNumQuote = getRandomNum(0, 1642);
    getQuotes(randomNumQuote);
})

