const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


btn.addEventListener('click', checkWebPage)


// function checkWebPage(webPage) {
//  webPage = input.value;
//  let page = new URL(webPage);
//  let finalResult;
//  let check;
//     if((page.protocol === `http:`) || (page.protocol === `https:`)) {
//       check = true;
//       finalResult = `This is valid URL page with valid protocol`;
//     }
//     else{
//     check = false
//     finalResult = `This is NOT valid webpage`;
//     }
//  result.innerHTML = finalResult
// }

// let x = `https://www.w3schools.com/js/js_scope.asp`;
// let y = `example`

function checkWebPage (webPage) {
 webPage = input.value;
 let check;
 let finalResult;
 try{
  page = new URL(webPage)
  check = true;
  finalResult = `valid URL`
 }
 catch (err){
  check = false;
  finalResult = `NOT valid URL`
 }
 result.innerHTML = finalResult
 }

 // checkWebPage (x)




