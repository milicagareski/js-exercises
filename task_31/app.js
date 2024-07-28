let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', vowelsAndConsonants)

function vowelsAndConsonants (s) {
  s = input.value;
  let vowels = ['a' , 'e' , 'i', 'o', 'u']
  let sum = ""
  let count = s.split(" ").join("").toLowerCase()
   
  for( let i = 0; i < count.length; i++) {
    for(let j = 0; j < vowels.length; j++)
      if(count[i] === vowels[j]){
        sum += count[i];
    }
  }

  let resultForVoWers = sum.length;
  let consonant = ((count.length)- resultForVoWers);

  result.innerHTML = `This sequence jas ${resultForVoWers} vowels and ${consonant} consonants`
}

