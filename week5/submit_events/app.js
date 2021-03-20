let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let button = document.getElementById("button");

button.onclick = (Event) => {
    alert(input1.value + "\n" + input2.value + "\n" + input3.value);
    input1.value = "";
    input2.value = "";
    input3.value = "";
};