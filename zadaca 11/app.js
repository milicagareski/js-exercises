const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', AreaOfCircle)

function AreaOfCircle(radius){
 radius = input.value
 let summary = (Math.PI * (radius ** 2));
 let finalResult = summary.toFixed(2)
 result.innerHTML = finalResult
}