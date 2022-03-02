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
    currentOutput.value = "";
});

plminusButton.addEventListener("click", function () {
    resultVal = currentOutput.value * -1;
    currentOutput.value = resultVal;
});

percentButton.addEventListener("click", function () {
    resultVal = currentOutput.value * 0.01;
    currentOutput.value = resultVal;
});

// using for loop to avoid adding id and getting value from each element
const numberButton = document.querySelectorAll(".number");
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function () {
        // currentOutput.value += numberButton[i].value;
        // console.log(numberButton[i]);
        // console.log(currentOutput.value);
        if (resultVal) {
            newVal = numberButton[i].value;
            // newVal += numberButton[i].value;
            resultVal = "";
            // console.log(newVal);
            // console.log(resultVal);
        } else {
            // if the decimal button has been clicked
            if (numberButton[i].value === ".") {
                if (decimalClicked != true)
                    newVal += numberButton[i].value;
                decimalClicked = true;
            }
            //if the number button has been clicked
            else {
                newVal += numberButton[i].value;
                // newVal = numberButton[i].value;
            }
        }
        currentOutput.value = newVal;
        // currentOutput.value += newVal;
        // console.log(prevVal); 
        // console.log(newVal); 
    });
};

const operatorButton = document.querySelectorAll(".operator");
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", function () {
        if (!resultVal) {
            prevVal = newVal;
            // console.log(newVal); 
            // console.log(prevVal); 
        } else {
            prevVal = resultVal;
            // console.log(newVal); 
            // console.log(prevVal); 
            // console.log(resultVal);
        }
        newVal = "";
        decimalClicked = false;
        operator = operatorButton[i].value;
        // console.log(operator);
        resultVal = "";

        // remove operator sign from currentOutput
        // currentOutput.value = ""; 

        // let operator sign visible
        currentOutput.value += operatorButton[i].value;
    })
};

resultButton.addEventListener("click", function () {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    // console.log(prevVal);
    // console.log(operator);
    // console.log(newVal);
    // console.log(currentOutput.value); 

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

        default: //keep the value
            resultVal = newVal;
    }

    // console.log(prevVal);
    // console.log(operator);
    // console.log(newVal);
    // console.log(resultVal);

    prevVal = resultVal;
    currentOutput.value = resultVal;

    // console.log(prevVal);
    // console.log(operator);
    // console.log(newVal);
    // console.log(resultVal);
    // console.log(currentOutput.value);
});




//using eval
// resultButton.addEventListener("click", function () {
//     currentOutput.value = eval(currentOutput.value);
// });

// for loop replaces this part, not necessary to use id
// const n1 = document.getElementById("n1");
// const n2 = document.getElementById("n2");
// const n3 = document.getElementById("n3");
// const n4 = document.getElementById("n4");
// const n5 = document.getElementById("n5");
// const n6 = document.getElementById("n6");
// const n7 = document.getElementById("n7");
// const n8 = document.getElementById("n8");
// const n9 = document.getElementById("n9");
// const n0 = document.getElementById("n0");

// n1.addEventListener("click", function () {
//     currentOutput.value += 1;
// });
// n2.addEventListener("click", function () {
//     currentOutput.value += 2;
// });
// n3.addEventListener("click", function () {
//     currentOutput.value += 3;
// });
// n4.addEventListener("click", function () {
//     currentOutput.value += 4;
// });
// n5.addEventListener("click", function () {
//     currentOutput.value += 5;
// });
// n6.addEventListener("click", function () {
//     currentOutput.value += 6;
// });
// n7.addEventListener("click", function () {
//     currentOutput.value += 7;
// });
// n8.addEventListener("click", function () {
//     currentOutput.value += 8;
// });
// n9.addEventListener("click", function () {
//     currentOutput.value += 9;
// });
// n0.addEventListener("click", function () {
//     currentOutput.value += 0;
// });




// for loop replaces this part, not necessary to use id
// const divideButton = document.getElementById("divide");
// const multiplyButton = document.getElementById("multiply");
// const subtractButton = document.getElementById("subtract");
// const addButton = document.getElementById("add");


// for loop replaces this part, not necessary to use id
// divideButton.addEventListener("click", function () {
//     currentOutput.value += "/";
// });

// multiplyButton.addEventListener("click", function () {
//     currentOutput.value += "*"
// });

// subtractButton.addEventListener("click", function () {
//     currentOutput.value += "-"
// });

// addButton.addEventListener("click", function () {
//     currentOutput.value += "+"
// });
