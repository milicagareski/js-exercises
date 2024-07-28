let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', secondBiggestNumbers )


function secondBiggestNumbers (array) {
  array = input.value;
  let arr = array.split(" ");
  let newArray = [];
  let check;

  for(let i = 0; i <arr.length ; i++) {
        arr[i] = Number(arr[i])
        if(!newArray.includes(arr[i])) {
            newArray.push (arr[i]);
         }
         
    }
newArray.sort(function(a,b){
  return b - a
});
result.textContent = `The second biggest number in this array is ${newArray[1]}`
}

