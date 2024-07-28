let btn = document.querySelector('.btn');
let result = document.querySelector('.result')

btn.addEventListener('click', summaryAndAritmeticValue)

function summaryAndAritmeticValue () {
 let a = Math.floor( Math.random() * 10 );
 console.log(a);
 let b = Math.floor( Math.random() * 10 );
 let c = Math.floor( Math.random() * 10 );
 let d = Math.floor( Math.random() * 10 );
 let summary = [a + b + c + d];
 let arrayOfNumbers = [a,b,c,d]

 let aritmeticValue = summary / arrayOfNumbers.length;

 result.innerHTML = `The four random numbers are ${a}, ${b}, ${c}, and ${d}. Their summary is ${summary} and their aritmetic value is ${aritmeticValue}`
}