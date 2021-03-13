let submitArray = [];

let colors = ["red", "blue", "green"];
let text = ["Addition: ", "Subtraction: ", "Multiplication: "];

for(let i = 0; i < 3; i++) {
    let div = document.createElement("div");
    div.style.display = "block";

    let input1 = document.createElement('input');
    input1.id = "first" + i.toString();
    input1.style.margin = "15px";
    input1.style.padding = "4px";

    let input2 = document.createElement('input');
    input2.id = "second" + i.toString();
    input2.style.margin = "15px";
    input2.style.padding = "4px";

    let submit = document.createElement('input');
    submit.style.margin = "15px";
    submit.style.padding = "4px";
    submit.type = "submit";
    submitArray.push(submit);

    let answer = document.createElement('span');
    answer.style.margin = "15px";
    answer.style.fontSize = "20px";
    answer.id = "answer" + i.toString();
    answer.textContent = text[i];
    answer.style.color = colors[i];

    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(submit);
    div.appendChild(answer);
    document.body.appendChild(div);
}

submitArray[0].addEventListener("click", (Event) => {
    let input1 = document.getElementById("first0");
    let input2 = document.getElementById("second0");
    let answer = document.getElementById("answer0");

    answer.textContent = text[0] + (parseInt(input1.value) + parseInt(input2.value));
});

submitArray[1].addEventListener('click', (Event) => {
    let input1 = document.getElementById("first1");
    let input2 = document.getElementById("second1");
    let answer = document.getElementById("answer1");

    answer.textContent = text[1] + (parseInt(input1.value) - parseInt(input2.value));
});

submitArray[2].addEventListener('click', (Event) => {
    let input1 = document.getElementById("first2");
    let input2 = document.getElementById("second2");
    let answer = document.getElementById("answer2");

    answer.textContent = text[2] + (parseInt(input1.value) * parseInt(input2.value));
});