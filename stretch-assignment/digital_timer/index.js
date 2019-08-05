//Variables
let ms10 = document.querySelector("#msTens");
let ms100 = document.querySelector("#msHundreds");

let s1 = document.querySelector("#secondOnes");
let s10 = document.querySelector("#secondTens");

ms10.textContent = 0;
ms100.textContent = 0;
s1.textContent = 0;
s10.textContent = 0;



setInterval(count = () => ms10.textContent++, 10);


    clearInterval(count()}