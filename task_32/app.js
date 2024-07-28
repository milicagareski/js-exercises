let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")

btn.addEventListener('click', countSimpleINterest )


function countSimpleINterest(principal, rate, years) {
  principal = Number( input1.value);
  rate = Number(input2.value);
  years = Number(input3.value);

  simpleInterest = ((principal * rate * years) / 100);
  let finalResult = simpleInterest.toFixed(2);
  let amount = (principal + simpleInterest);
  let finalAmount = amount.toFixed(2)
  
  result.innerHTML = `The simple interest rate for this load is ${finalResult} and the amount of money that shoud be back is ${finalAmount}`
}
