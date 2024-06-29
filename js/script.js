const arrDay = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четверг",
    "П'ятниця",
    "Субота",
];

const namesOfMonth = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
];


setInterval(() => {
    const elements = {
      day: document.querySelector(".date-day"),
      date: document.querySelector(".date"),
      month: document.querySelector(".date-month"),
      year: document.querySelector(".date-year"),
      clock: document.querySelector(".digital-clock"),
      seconds: document.querySelector(".clock-seconds__arrow"),
      minutes: document.querySelector(".clock-minutes__arrow"),
      hours: document.querySelector(".clock-hours__arrow"),
    };

    const currentTime = new Date();

    const day = currentTime.getDay();
    const date = currentTime.getDate();
    const month = currentTime.getMonth();
    const year = currentTime.getFullYear();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
        // console.log(seconds);

    const localTime = currentTime.toLocaleTimeString("uk-UA");
    // console.log(localTime);

    const secondsDeg = 360 / 60 * seconds;
    const minutesDeg = 360 / 60 * minutes;
    const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

    elements.day.textContent = arrDay[day];
    elements.date.textContent = date;
    elements.month.textContent = namesOfMonth[month];
    elements.year.textContent = year;
    elements.clock.textContent = `Поточний час ${localTime}`;

    elements.seconds.style.transform = `rotate(${secondsDeg}deg)`;
    elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
    elements.hours.style.transform = `rotate(${hoursDeg}deg)`;

}, 1000)






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

// const arrDay = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П`ятниця",
//   "Субота",
// ];
// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];

// const elements = {
//   day: document.querySelector(".date-day"),
//   date: document.querySelector(".date"),
//   month: document.querySelector(".date-month"),
//   year: document.querySelector(".date-year"),
//   clock: document.querySelector(".digital-clock"),
//   seconds: document.querySelector(".clock-seconds__arrow"),
//   minutes: document.querySelector(".clock-minutes__arrow"),
//   hours: document.querySelector(".clock-hours__arrow"),
// };

// setInterval(() => {
//   const currentTime = new Date();

//   const day = currentTime.getDay();
//   const date = currentTime.getDate();
//   const month = currentTime.getMonth();
//   const year = currentTime.getFullYear();
//   const seconds = currentTime.getSeconds();
//   const minutes = currentTime.getMinutes();
//   const hours = currentTime.getHours();
//   const milliseconds = currentTime.getMilliseconds()
//   const localTime = currentTime.toLocaleTimeString("uk-UA");

//   const secondsDeg = (360 / 60) * seconds ; // + (360 / 60 / 1000) * milliseconds
//   const minutesDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
//   const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

//   elements.day.textContent = arrDay[day];
//   elements.date.textContent = date;
//   elements.month.textContent = namesOfMonth[month];
//   elements.year.textContent = year;
//   elements.clock.textContent = `Поточний час ${localTime}`;

//   elements.seconds.style.transform = `rotate(${secondsDeg}deg)`;
//   elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//   elements.hours.style.transform = `rotate(${hoursDeg}deg)`;
// }, 1000);
