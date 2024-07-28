const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const input2 = document.querySelector('.input2');
const result = document.querySelector('.result');


btn.addEventListener('click', areaOfRectangle)


function areaOfRectangle(a,b){
 a = Number(input.value);
 b = Number(input2.value)
 result.innerHTML = a * b
};


// za sho stoi napred Number, a i bez to funkcionira?




