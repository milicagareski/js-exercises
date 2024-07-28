let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', validEmail )

function validEmail (mail) {
mail = input.value;
   let findSimbol = mail.match (/@+/g);
   let lastLetters = mail.search(/\.com\b/);
   let check = false;
   let finalResult;
   let indexOfSimbol = mail.indexOf(`@`);
   console.log(indexOfSimbol);
   let indexOfLastLetters = mail.indexOf(`.com`);
      if((findSimbol !== null) && (lastLetters !== -1) && (indexOfSimbol < indexOfLastLetters) && (indexOfSimbol > 0)){
          check = true;
          finalResult = `This is VALID email adress`
       }
       if(!check){
         finalResult = `This is NOT valid email adress`
       }
 result.textContent = finalResult
 }

