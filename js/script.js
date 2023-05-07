// Creating an array of week days
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Creating an array of months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the necessary elements to manipulate
const toggleTheme = document.querySelector(".navbar__button");
const hour = document.querySelector(".clock__hour");
const minute = document.querySelector(".clock__minute");
const second = document.querySelector(".clock__seconds");
const timeClock = document.querySelector(".digitalClock__time");
const dateClock = document.querySelector(".digitalClock__date");

// Add dark theme to the webpage
toggleTheme.addEventListener("click", (event) => {
    const body = document.querySelector("body");
    if (body.classList.contains("darkMode")) {
        body.classList.remove("darkMode");
        event.target.innerHTML = '<span class="material-symbols-outlined navbar__toggle">dark_mode</span>'
    } else {
        body.classList.add("darkMode");
        event.target.innerHTML = '<span class="material-symbols-outlined navbar__toggle">light_mode</span>'
    }
})

// Creating a function that gets the information needed to clock start working
function clockStart() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hoursToShowOnClock = hours % 24;

    // Manipulate the pointers of the watch so that they can rotate 
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursToShowOnClock, 0, 12, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    timeClock.innerHTML = `${hoursToShowOnClock}:${minutes < 10 ? `0${minutes}` : minutes}`
    dateClock.innerHTML = `${daysInWeek[day]}, ${date} ${months[month]} ${year}`
}
// The scale() function is used to map the input range of the time and seconds (0-60) to the output range of the degrees for the clock hands (0-360)
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



clockStart()
setInterval(clockStart, 1000)