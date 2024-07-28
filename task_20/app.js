let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', summaryTheLetters)

function summaryTheLetters (sentence, letter) {
 let count = 0;
 sentence = input1.value;
 letter = input2.value;
 let newSentence = sentence.toLowerCase();
 let newLetter = letter.toLowerCase();
 for(let i = 0; i <= newSentence.length; i++){
  if(newSentence[i] === newLetter) {
    count++;
  }
 }
  result.innerHTML = `This letter occurs ${count} times in this sentence`
  ;

}

