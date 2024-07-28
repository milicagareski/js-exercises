let input = document.querySelector(".input")
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', mode)


function mode(array) {
array = input.value;
let arr = array.split(" ");
let maxcount = 0;
let element;

for(let i =0; i<arr.length; i++){
        let count = 0;
            for(let j =0; j<arr.length; j++){
                if(arr[i] === arr[j]) {
                count++;
                }
         if (count > maxcount) {
         maxcount = count;
         element = arr[i];
         }
     }
}
if(maxcount > 1){
  result.innerHTML = `Mode for this array is number ${element} `
}
else{
result.innerHTML = `their is no mode `
}
}
