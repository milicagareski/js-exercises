let input = document.querySelector('.displayInput');
let numbers = document.querySelectorAll('.number');
let allClear = document.getElementById('allClear');
let deleteBtn = document.getElementById('delete-btn');
let equal = document.querySelector('.equal');
let operators = document.querySelectorAll('.operator')

numbers.forEach(function(number){
number.addEventListener('click', function(){
 if (input.value === '0'){
  input.value = ""
 }
  input.value += number.value;
  
   })
});

allClear.addEventListener('click', function(){
 if(input.value === ""){
  input.value = '0'
 }
 else { input.value = ""}
});

deleteBtn.addEventListener('click', function(){
const removeNumber = input.value = input.value.toString().slice(0,-1);
if (removeNumber === ""){
 input.value = '0';
}
});

equal.addEventListener('click', result)

function result (){
input.value = eval(input.value)
}


