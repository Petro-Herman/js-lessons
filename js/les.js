console.log("Hello!");

// Зразок синхронного коду

console.log("first");
console.log("second");
console.log("third");

// Зразок асинхронного коду

console.log("first");
setTimeout(() => {
    console.log("second");
}, 20000);
console.log("third");

// Click me

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);
// callback — функція, виклик якої необхідно запланувати;
// delay — час у мілісекундах, через який callback-функція буде викликана один раз.

const button = document.querySelector("button"); // Цей рядок вибирає перший елемент кнопки на сторінці і зберігає його в змінну button за допомогою методу document.querySelector.
const onClick = () => {                          //Тут оголошується функція onClick, яка буде викликатися при натисканні на кнопку.
    const timerId = setTimeout(() => {           //Використовується функція setTimeout, яка виконує передану їй функцію після заданого часу (у цьому випадку через 2000 мілісекунд або 2 секунди).
                                                //Таймер повертає ідентифікатор таймера, який зберігається у змінну timerId.
        console.log("I love it!");
    }, 2000);
    console.log(timerId);                       //Ідентифікатор таймера (timerId) виводиться у консоль. Це число, яке унікально ідентифікує таймер і може бути використане для його очищення за допомогою clearTimeout.
};

button.addEventListener("click", onClick);      //Цей рядок додає обробник подій для кнопки. Коли користувач натискає на кнопку, викликається функція onClick.


// Послідовність дій при натисканні на кнопку:
// Користувач натискає на кнопку:
// Функція onClick викликається.
// Встановлюється таймер:
// setTimeout встановлює таймер на 2000 мілісекунд (2 секунди).
// Після цього часу виконується функція, яка виводить "I love it!" у консоль.
// Ідентифікатор таймера:
// Ідентифікатор таймера (timerId) виводиться у консоль одразу після встановлення таймера.
// Наприклад, консоль може вивести щось на кшталт 1, що є ідентифікатором таймера.
// Через 2 секунди:
// Після завершення 2 секунд функція, передана до setTimeout, виконується і виводить "I love it!" у консоль.



// 0800607090; 0-800-40-20-40 vodafon


const greet = () => {
    console.log("Hello, JS!");
};
const timerId = setTimeout(greet, 3000);
// console.log(timerId);
clearTimeout(timerId);

const setBtn = document.querySelector(".js-set");
const clearBtn = document.querySelector(".js-clear");
let timeoutId;

setBtn.addEventListener ("click", () => {
    timeoutId = setTimeout (() => {
        console.log("Hello! How are you?");
    }, 3000);
});
clearBtn.addEventListener("click", () => {
    clearTimeout(timeoutId);
    console.log(`Timeout with id ${timeoutId} has stopped!`);
});

// setInterval

// const intervalId = setInterval(callback, delay, arg1, arg2, ...);

const startBtn = document.querySelector(".js-start");
startBtn.addEventListener("click", () => {
    const intervalId = setInterval(() => {
        console.log(`Interval Id: ${intervalId}, ${Math.random()}`);
    }, 2000);
});

