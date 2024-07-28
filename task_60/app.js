let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', sqare)


function sqare (number) {
    number = Number(input.value);
    count = 0
    let finalResult;

    for(let i = 0; i <= number; i++) {
        if(Math.sqrt(number) === i) {
        count+=i
        }
    }

    if((Math.pow(count,2)) === number) {
        finalResult = `This is sqare number`
    }
    else {
        finalResult = `This is NOT sqare number`
    }

    result.textContent = finalResult
}

