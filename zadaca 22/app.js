let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', reverseOrder)


function reverseOrder(n) {
  n = input.value
  n = n.toString();
  let arrayOfNum = n.split('');
  let count = " ";
    for(let i = (arrayOfNum.length - 1); i >= 0 ; i--){
    count = count + arrayOfNum[i]
        
}

      result.innerHTML = count

}

reverseOrder(123)

