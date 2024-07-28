const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function powerOfNumber (a,b) {
 if( b === 0) {
  return 1
 }
 let result = a * powerOfNumber (a, b-1);
return result 
}

console.log(powerOfNumber(2,4));

// powerOfNumber 2, 4 => 16
//  2 * powerOfNumber (2, 3) => (2 * 8)
//   2 * powerOfNumber (2, 2) => (2 * 4)
//    2 * powerOfNumber (2, 1) => (2 * 2)
//     2 * powerOfNumber (2, 0) => (2 * 1)
//      1