const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', function(a){
 a = input.value;
 let volumeOfCube = a * a * a;
 result.innerHTML = `The volume of cube is ${volumeOfCube} `
})