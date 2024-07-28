const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result')

btn.addEventListener('click', summaryOfRecipropicalValue)


const number = 10;

function summaryOfRecipropicalValue (n) {
 n = input.value;
 let count = 0;
 for (let i = 1; i <= n; i++) {
  let recipropicalValue = 1/i;
   count += recipropicalValue;
   result.innerHTML = ` The summary of recipropical numbers to this number is ${count}`
}
}

summaryOfRecipropicalValue(number)