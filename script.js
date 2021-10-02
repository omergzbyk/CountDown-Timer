const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

const newYear = "1 Jan 2022";
function countdown(){
    
    const newYearsdate = new Date(newYear);
    const currentDate = new Date();
    const totallSeconds = (newYearsdate-currentDate) / 1000;

    console.log(totallSeconds);
    const day = Math.floor(totallSeconds / 3600 / 24);
    const hour = Math.floor((totallSeconds / 3600) % 24);
    const minute = Math.floor((totallSeconds / 60) % 60);
    const second = Math.floor(totallSeconds % 60);

    days.innerHTML = formatTime(day);
    hours.innerHTML = formatTime(hour);
    minutes.innerHTML = formatTime(minute);
    seconds.innerHTML = formatTime(second);
  

    console.log(day);
    console.log(hour);
    console.log(minute);
    console.log(second);
}


function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);