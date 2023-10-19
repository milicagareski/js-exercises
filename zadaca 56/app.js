let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', compoundInterestRate )

function compoundInterestRate (principal, rate, time ) {
principal = Number(input1.value);
rate = Number(input2.value)
time = Number(input3.value)
let compound = 12
let lastRate = rate / 100;
      let amount = principal * (Math.pow((1 + lastRate / compound ), (time * compound)));
      let finalAmount = amount.toFixed(2)
      let cir = (finalAmount - principal).toFixed(2);
console.log(finalAmount);
console.log(cir);
result.innerHTML = `Slozena kamatna stapka iznesuva ${cir}, a vkupnata suma koja ke se vrati e ${finalAmount}`
}

