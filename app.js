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
    // prevVal = resultVal;
    // newVal = currentOutput.value * -1;
    // currentOutput.value = newVal;
});

percentButton.addEventListener("click", function () {
    resultVal = currentOutput.value * 0.01;
    currentOutput.value = resultVal;

    // prevVal = resultVal;
    // resultVal = "";

    // console.log(prevVal); 
    // console.log(newVal); 
    // console.log(resultVal); 
});


const numberButton = document.querySelectorAll(".number");
// using for loop
const onClickNumber = function () {
    number = this.value;
    if (resultVal) { // if there is previous calculation
        prevVal = resultVal;
        resultVal = "";
        newVal += number;
        // currentOutput.value = newVal;
        currentOutput.value += number; // display all the inputs
        console.log(prevVal);
        console.log(newVal);
        console.log(resultVal);
    } else { // no previous calcaulation result
        if (operator) { // start with operator
            newVal += number;
            currentOutput.value += number;
            console.log(prevVal);
            console.log(newVal);
            console.log(resultVal);
        } else { // start with number
            prevVal += number;
            // currentOutput.value = prevVal;
            currentOutput.value += number;
            console.log(prevVal);
            console.log(newVal);
            console.log(resultVal);
        }
    }
};

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", onClickNumber);
};


const operatorButton = document.querySelectorAll(".operator");
// using for loop
const onClickOperator = function () {
    op = this.value;
    if (newVal) {
        prevVal = parseFloat(prevVal);
        newVal = parseFloat(newVal);
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
                resultVal = newVal;
                break;
        }
        // decimalClicked = false;
        prevVal = resultVal;
        newVal = "";
    }
    // decimalClicked = false;
    //     else  {
    //     operator = op;
    // }

    // // make operator visible whether the input starts with the number or operator
    operator = op;
    currentOutput.value += op;
};
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", onClickOperator);
};


resultButton.addEventListener("click", () => {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
    // console.log(prevVal);
    // console.log(newVal);
    if (newVal || newVal === 0) { // allow NaN+0 = NaN
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
                resultVal = newVal;
                break;
        }
        // console.log(prevVal);
        // console.log(newVal);
        // console.log(resultVal);
        prevVal = resultVal;
        // newVal = "";
        operator = "";
        // currentOutput.value = resultVal;
        console.log(prevVal);
        console.log(newVal);
        console.log(resultVal);

        // } else {
        //     resultVal = newVal;
        //     // alert("Enter number first.");
        //     // currentOutput.value = "";
    } else {
        if (operator) {
            resultVal = newVal; // (1+= NaN)
            // resultVal = prevVal; // keep the value (1+= 1)
            console.log(prevVal);
            console.log(newVal);
            console.log(resultVal);
        } else { // keep the prevVal after enter result button (1=1)
            resultVal = prevVal;
            console.log(prevVal);
            console.log(newVal);
            console.log(resultVal);
        }
    }

    currentOutput.value = resultVal;
    // prevVal = resultVal;
    newVal = "";
    // operator = "";
});



// // using forEach for all the number buttons
// numberButton.forEach(num => num.addEventListener("click", event => {
//     if (operator) {
//         if (!newVal) {
//             currentOutput.value += "";
//         }
//         newVal += event.target.value;
//         currentOutput.value += event.target.value;
//     } else {
//         prevVal += event.target.value;
//         currentOutput.value += event.target.value;
//     }
// }));


// // using forEach for all the operator buttons
// operatorButton.forEach(op => op.addEventListener("click", event => {
//     if (newVal) {
//         prevVal = parseFloat(prevVal);
//         newVal = parseFloat(newVal);
//         switch (operator) {
//             case "+":
//                 resultVal = prevVal + newVal;
//                 break;
//             case "-":
//                 resultVal = prevVal - newVal;
//                 break;
//             case "*":
//                 resultVal = prevVal * newVal;
//                 break;
//             case "/":
//                 resultVal = prevVal / newVal;
//                 break;
//             default:
//                 resultVal = newVal;
//                 break;
//         }
//         prevVal = resultVal;
//         newVal = "";
//     }
//     if (prevVal) {
//         operator = event.target.value;
//         currentOutput.value += event.target.value;
//     }
// }));