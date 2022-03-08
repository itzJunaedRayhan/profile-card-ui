let root = document.querySelector(':root');    
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');

//  change color
function changeColor (color) {
    root.style.setProperty('--theme-color', color)
}


btn1.addEventListener('click', () => changeColor('#3498db'))
btn2.addEventListener('click', () => changeColor('#ff1756'))
btn3.addEventListener('click', () => changeColor('#1cb65d'))
btn4.addEventListener('click', () => changeColor('#8e44ad'))
btn5.addEventListener('click', () => changeColor('#f4b932'))