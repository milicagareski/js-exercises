const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', nestedParenthesis)

// function nestedParenthesis (s) {
//    let count = 0;
//    let array = [];
//    for(let i = 0; i < s.length; i++) {
//       if( s[i] === '(') {
//          array.push(s[i]);
//          console.log(array);
//       } else if (s[i] === ')') {
//          if (count < array.length) {
//             count = array.length;
//             array.pop()
//          }
//       }
//    }
//    console.log(count);
// }

function nestedParenthesis(s) {
   let maxParenthesis = 0
   let currentParenthesis = 0

   for (let i = 0; i < s.length; i++) {
      if (currentParenthesis < 0) {
         return false
      }
      
      if (s[i] === '(') {
         currentParenthesis++
      } else if (s[i] === ')') {
         currentParenthesis--
      }

      if (currentParenthesis > maxParenthesis) {
         maxParenthesis = currentParenthesis
      }
   }

   if (currentParenthesis !== 0) {
      return false
   }

   return maxParenthesis
}

console.log(nestedParenthesis(`( )(a +b) + ((b + (c + d )))`))