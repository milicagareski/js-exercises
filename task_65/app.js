let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


// function towerOfHanoi(n, fromRod,  toRod,  usingRod)
// {
//         if (n === 1)
//         {
//           console.log(`Move disk ${n} to ${toRod}`);
//           return
//         }
//         towerOfHanoi(n - 1, fromRod, usingRod, toRod);
//         console.log(`Move disk ${n} from  ${fromRod} to  ${toRod}`);
//         towerOfHanoi(n - 1, usingRod, toRod, fromRod);
//     }


















function towerOfHanoi (n,fromRod,toRod,usingRod) {

if(n === 1){
  return console.log(`move disk ${n} to ${toRod}`);
}

towerOfHanoi(n - 1,fromRod, usingRod, toRod )
console.log(`move disk${n} from ${fromRod} to ${toRod}`);
towerOfHanoi(n-1, usingRod, toRod, fromRod)
}













1




// 1 = end;

// 2 = medium;

// 1 = medium;

// 3 = end-+


console.log (towerOfHanoi(3,`start`,`end`,`medium`))
