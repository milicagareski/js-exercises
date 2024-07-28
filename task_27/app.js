let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', perfectSquare )

function perfectSquare (n) {
  n = Number(input.value)
  let array = [];
  let newArray = [];
  for(let i = 0; i <= n; i++){
     array.push(i) 
        };
        for(let j = 0; j < array.length; j++) {
   if(array[j] === Math.sqrt(n)){
    newArray.push(array[j])
};
}
if (Math.pow(newArray[0], 2) === n) {
  result.innerHTML = `This is sqare number`
}

else  {
  result.innerHTML = `This is NOT sqare number`
};
}