let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', sumaryOdOddandEvenNumbers )

function sumaryOdOddandEvenNumbers (numbers) {
  numbers = input.value;
  let n = numbers.toString();
  let array = n.split("");
  let countEven = 0;
  let countOdd = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          countEven += Number(array[i])
        }
        else {
          countOdd+= Number(array[i]);
        }
    }
    result.innerHTML = `The sumary od even numbers is ${countEven} and the sumarry od odd numbers is ${countOdd} `
}

