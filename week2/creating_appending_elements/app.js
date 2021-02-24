let header1 = document.createElement('h1');
header1.textContent = "Welcome to my JS site.";
document.body.appendChild(header1);

let paragraph = document.createElement('p');
paragraph.textContent = "All of this was created with Javascript";
document.body.appendChild(paragraph);

let ol = document.createElement('ol');
let li1 = document.createElement('li');
li1.textContent = "List 1";

let li2 = document.createElement('li');
li2.textContent = "List 2";

let li3 = document.createElement('li');
li3.textContent = "List 3";

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);

document.body.appendChild(ol);