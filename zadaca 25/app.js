let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', leapYear )

function leapYear(year) {
 year = input.value;
 if (year % 4 ===0) {
  result.innerHTML =`This is leap year`
 }
 else {
  result.innerHTML =` This is NOT leap year`
 }
}


