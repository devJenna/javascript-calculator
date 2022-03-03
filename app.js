const currentOutput = document.querySelector(".current-output");
const clearButton = document.querySelector(".clear");
const plminusButton = document.querySelector(".pl-minus");
const percentButton = document.querySelector(".percent");
const resultButton = document.querySelector(".operator-result");

let prevVal = "";
let newVal = "";
let operator = "";
let resultVal = "";
let decimalClicked = false;

clearButton.addEventListener("click", function () {
    prevVal = "";
    newVal = "";
    operator = "";
    resultVal = "";
    decimalClicked = false;
    currentOutput.value = "";
});

plminusButton.addEventListener("click", function () {
    resultVal = currentOutput.value * -1;
    currentOutput.value = resultVal;
    prevVal = resultVal;
});

percentButton.addEventListener("click", function () {
    resultVal = currentOutput.value * 0.01;
    currentOutput.value = resultVal;
    // console.log(prevVal); 
    // console.log(newVal); 
    // console.log(resultVal); 

    prevVal = resultVal;
    resultVal = "";

    // console.log(prevVal); 
    // console.log(newVal); 
    // console.log(resultVal); 
});

const numberButton = document.querySelectorAll(".number");
const onClickNumber = (number) => () => {
    if (operator) {
        // console.log(prevVal);
        // console.log(newVal);
        // console.log(resultVal);
        if (!newVal) {
            // resultVal = "";
            currentOutput.value += "";
        }
        newVal += number;
        currentOutput.value += number;
    } else {
        prevVal += number;
        currentOutput.value += number;
    }
    // console.log(prevVal); 
    // console.log(newVal); 
    // console.log(resultVal);
    // currentOutput.value += number;

};
document.querySelector("#n0").addEventListener("click", onClickNumber("0"));
document.querySelector("#n1").addEventListener("click", onClickNumber("1"));
document.querySelector("#n2").addEventListener("click", onClickNumber("2"));
document.querySelector("#n3").addEventListener("click", onClickNumber("3"));
document.querySelector("#n4").addEventListener("click", onClickNumber("4"));
document.querySelector("#n5").addEventListener("click", onClickNumber("5"));
document.querySelector("#n6").addEventListener("click", onClickNumber("6"));
document.querySelector("#n7").addEventListener("click", onClickNumber("7"));
document.querySelector("#n8").addEventListener("click", onClickNumber("8"));
document.querySelector("#n9").addEventListener("click", onClickNumber("9"));
document.querySelector("#decimal").addEventListener("click", onClickNumber("."));


const operatorButton = document.querySelectorAll(".operator");
const onClickOperator = (op) => () => {
    if (prevVal) {
        operator = op;
        currentOutput.value += op;
    } else {
        alert("enter number first");
    }
}
document.querySelector("#add").addEventListener("click", onClickOperator("+"));
document.querySelector("#subtract").addEventListener("click", onClickOperator("-"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));



// resultButton.addEventListener("click", () => {
document.querySelector("#calculate").addEventListener("click", () => {
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
    // console.log(prevVal);
    // console.log(newVal);
    if (newVal) {
        switch (operator) {
            case "+":
                resultVal = prevVal + newVal;
                break;
            case "-":
                resultVal = prevVal - newVal;
                break;
            case "*":
                resultVal = prevVal * newVal;
                break;
            case "/":
                resultVal = prevVal / newVal;
                break;
            default:
                break;
        }
        // console.log(prevVal);
        // console.log(newVal);
        // console.log(resultVal);
        prevVal = resultVal;
        newVal = "";
        operator = "";
        currentOutput.value = resultVal;
        // console.log(prevVal);
        // console.log(newVal);
        // console.log(resultVal);
    }
    // else {
    //     alert("enter number first");
    // }
    // currentOutput.value += resultVal;
})



