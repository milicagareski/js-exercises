let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

// btn.addEventListener('click', )


function memoization(num, memo) {

   memo = memo || {};

   if (memo[num]) {
      return memo[num]
      
   }

   if(num === 1 || num === 0) {
      return 1
   }
   return memoization (num-1) + memoization(num -2)
}


console.log(memoization(10))


// function fibonaci(num) {
// let array = [];
// let count;
// let a = 0;
// let b = 1;
//    for(let i = 0; i < num; i++) {
//       count = a + b;
//       a = b;
//       b = count;
//     array.push(count);
//   }
//  return array
// }




// function fibonaci (num) {
//    let array = []

//    if(num === 1 || num === 0) {
//       return 1
//    }

//    else {
//       return fibonaci (num-1) + fibonaci(num -2)
//    }
// }



// function fibonaci (num) {
//   let a = 0;
//   let b = 1;
//   let sum;
//   while (num > 0) {
//    sum = a + b;
//    a = b;
//    b = sum
//    num--
//   }
// return sum
// }


// 

// console.log(fibonaci(10));

