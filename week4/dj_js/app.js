let box = document.createElement('div');
box.style.width = "200px";
box.style.height = "200px";
box.textContent = "BOX";
box.style.backgroundColor = "white";
document.body.appendChild(box);

window.onload = function()
{
    box.style.backgroundColor = "black";
}


box.addEventListener('mouseover', (Event) => {
    box.style.backgroundColor = "blue";
});

box.addEventListener('mousedown', (Event) => {
    box.style.backgroundColor = "red";
});

box.addEventListener('mouseup', (Event) => {
    box.style.backgroundColor = "yellow";
});

box.addEventListener('dblclick', (Event) => {
    box.style.backgroundColor = "green";
});

window.addEventListener('mousewheel', (Event) => {
    box.style.backgroundColor = "orange";
});

window.addEventListener('keypress', (Event) => {
    switch(Event.key)
    {
        case "r":
            box.style.backgroundColor = "red";
        break;
            
        case "b":
            box.style.backgroundColor = "blue";
        break;

        case "y":
            box.style.backgroundColor = "yellow";
        break;

        case "g":
            box.style.backgroundColor = "green";
        break;

        case "o":
            box.style.backgroundColor = "orange";
        break;
    }
});