let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', gcdAngLcm)

function gcdAngLcm (a,b) {
  a = Number( input1.value );
  b = Number (input2.value);
  let newArrayOfa = [];
  let newArrayOfb = [];
  let gcd = []

  for(let i = a ; i > 0; i-- ) {
      if(a % i === 0 ) {
        newArrayOfa.push(i)
      }
  }
    for(let j = b ; j > 0; j-- ) {
      if(b % j === 0 ) {
        newArrayOfb.push(j)
      }
    }
    for(let i = 0; i < newArrayOfa.length; i++) {
      for(let j = 0; j < newArrayOfb.length; j++) {
        if(newArrayOfa[i] === newArrayOfb[j]) {
          gcd.push(newArrayOfa[i])
        }
      }
    }
    let lcm = (a*b) / gcd[0];

    result.innerHTML = `Najgolem zaednicki delitel za ovie broevi e brojot ${gcd[0]}, a najmal zaednicki sodrzatel e brojot ${lcm}`
}






