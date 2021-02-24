let navbar = document.createElement('nav');
let link1 = document.createElement('a');
link1.href = '#';
link1.textContent = "Homepage";

let span = document.createElement('span');
span.textContent = " | ";

let link2 = document.createElement('a');
link2.href = "#";
link2.textContent = " About Me";

let header = document.createElement('h1');
header.textContent = "Welcome to my portfolio.";

let paragraph = document.createElement('p');
paragraph.textContent = "This is where you can find information about my skillset.";

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.textContent = "HTML5 - 3 Years";

let li2 = document.createElement('li');
li2.textContent = "CSS - 3 Years";

let li3 = document.createElement('li');
li3.textContent = "JavaScript - 5 Years";

let footer = document.createElement('footer');
footer.textContent = "You can contact me at 555-5555";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
navbar.appendChild(link1);
navbar.appendChild(span);
navbar.appendChild(link2);
document.body.appendChild(navbar);
document.body.appendChild(header);
document.body.appendChild(paragraph);
document.body.appendChild(ul);
document.body.appendChild(footer);