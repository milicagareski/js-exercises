let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', anagram )


function anagram (a,b) {
  a = input1.value;
  a = a.toLowerCase()
  a = a.split(" ").join("");

  b = input2.value;
  b = b.toLowerCase();
  b = b.split(" ").join("");

  let arrayOfa = [];
  let arrayOfb = [];

  for(let i = 0; i < a.length; i++) {
    arrayOfa.push(a[i])
  }

    for(let i = 0; i < b.length; i++) {
    arrayOfb.push(b[i]);
  }
 
    for (let x of arrayOfa) {
      for (let y of arrayOfb) {
        if ((arrayOfa[x] === arrayOfa[y]) && (arrayOfa.length === arrayOfb.length)) {
          result.innerHTML = `The sentences are anagram`     
 }
         else {
            result.innerHTML = `The sentences are NOT anagram`     
        }
      }
    }
  }




