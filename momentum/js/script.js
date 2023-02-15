
const time = document.querySelector('.time');
const dateFull = document.querySelector('.date');

//Add time 
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
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

