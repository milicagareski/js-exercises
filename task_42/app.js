const btn = document.querySelector('.btn');
const input = document.querySelector(".input")
const result = document.querySelector('.result')

btn.addEventListener("click", countSmallAndBigLetters)


function countSmallAndBigLetters (sentence) {
 sentence = input.value
let countBig = 0;
 let countSmall = 0;
 let str = sentence.split(" ").join("");

 for(let i = 0; i < str.length; i++  ) {
     if(str[i] === str[i].toLowerCase()) {
      countSmall++;
     }
     else{
      countBig++
     }
   }
    result.innerHTML = `The sequence has ${countSmall} small letters and ${countBig} big letters`
}

