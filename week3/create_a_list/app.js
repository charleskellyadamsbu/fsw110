let header = document.createElement('h1');
header.textContent = "Hello World";
document.body.appendChild(header);

for(let i = 1; i <= 10; i++) {
    let header = document.createElement('h1');
    header.textContent = "Hello World";
    document.body.appendChild(header);
    document.getElementsByTagName('h1')[i].setAttribute("style", "color: green;");
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for(let i = 0; i < names.length; i++) {
    let name = document.createElement('p');
    name.textContent = names[i];
    document.body.appendChild(name);
}