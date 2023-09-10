        /* Current day of the week*/     
const daysOfTheWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

const currentDate = new Date();
const dayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
document.getElementById("day").innerHTML = dayOfTheWeek;
        
        /* Current day of the week*/
const currentUTCTime = Date.now();
document.getElementById("time").innerHTML = currentUTCTime;
