const currentOutput = document.querySelector(".current-output");
const clearButton = document.querySelector(".clear");
const plminusButton = document.querySelector(".pl-minus");
const percentButton = document.querySelector(".percent");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const decimalButton = document.querySelector(".decimal");
const resultButton = document.querySelector(".operator-result");
// const number = document.getElementsByClassName(".number");
// const operatorButton = document.querySelectorAll(".operator");

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const n0 = document.getElementById("n0");

n1.addEventListener("click", function () {
    currentOutput.value += 1;
});
n2.addEventListener("click", function () {
    currentOutput.value += 2;
});
n3.addEventListener("click", function () {
    currentOutput.value += 3;
});
n4.addEventListener("click", function () {
    currentOutput.value += 4;
});
n5.addEventListener("click", function () {
    currentOutput.value += 5;
});
n6.addEventListener("click", function () {
    currentOutput.value += 6;
});
n7.addEventListener("click", function () {
    currentOutput.value += 7;
});
n8.addEventListener("click", function () {
    currentOutput.value += 8;
});
n9.addEventListener("click", function () {
    currentOutput.value += 9;
});
n0.addEventListener("click", function () {
    currentOutput.value += 0;
});


clearButton.addEventListener("click", function () {
    currentOutput.value = "";
});

plminusButton.addEventListener("click", function () {
    currentOutput.value = (currentOutput.value) * -1;
});

percentButton.addEventListener("click", function () {
    currentOutput.value = currentOutput.value * 0.01;
});

divideButton.addEventListener("click", function () {
    currentOutput.value += "/";
});

multiplyButton.addEventListener("click", function () {
    currentOutput.value += "*"
});

subtractButton.addEventListener("click", function () {
    currentOutput.value += "-"
});

addButton.addEventListener("click", function () {
    currentOutput.value += "+"
});

decimalButton.addEventListener("click", function () {
    currentOutput.value += ".";
});

//using eval
resultButton.addEventListener("click", function () {
    currentOutput.value = eval(currentOutput.value);
});
