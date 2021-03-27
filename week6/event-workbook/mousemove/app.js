let h1 = document.getElementsByTagName('h1');
let box = document.getElementsByClassName('red-box');

box[0].addEventListener('mousemove', e => {
    h1[0].textContent = e.x + " and " + e.y;
});