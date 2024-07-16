const allButtons = document.querySelectorAll(".btn"); //accessing all the buttons
// console.log(allButtons);
const ACbuttonElm = document.querySelector(".btn-AC");
const displayElm = document.querySelector(".topdisplay");
const equalElm = document.querySelector(".btn-equal");
const cutElm = document.querySelector(".btn-C");
const dotElm = document.querySelector(".btn-dot");
let numberToDisplay = "";
let lastOperator = "";
const operators = ["+", "-", "%", "/", "*"];
const checkLastOperator = () => {
  const lastChar = numberToDisplay[numberToDisplay.length - 1];
  if (operators.includes(lastChar)) {
    //this will check if there is any operator at the last and if there is then it will ignore the last operator and do the calculation
    numberToDisplay = numberToDisplay.slice(0, -1);
  }
};
const buttonAction = (value) => {
  //created a separte function for the button action inorder to minimise the code in the loop
  if (value === ACbuttonElm.innerText) {
    numberToDisplay = "";
    return display(numberToDisplay);
  }
  if (value === equalElm.innerText) {
    checkLastOperator();
    return calculateTotal();
  }
  if (value === cutElm.innerText) {
    numberToDisplay = numberToDisplay.slice(0, -1); //here the slice method will read the string from index 0 and stops before the last character
    return display(numberToDisplay);
  }
  if (operators.includes(value)) {
    lastOperator = value;
    checkLastOperator();
  }
  if (value === dotElm.innerText) {
    const lastOperatorIndex = numberToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = numberToDisplay.slice(lastOperatorIndex); //this provides the last number subset after an operator so that multiple "." after the operator can be handled
    console.log(lastNumberSet);
    if (lastNumberSet.includes(".")) {
      return;
    }
    if (!lastOperator && numberToDisplay.includes(".")) {
      return;
    }
  }
  numberToDisplay += value;
  display(numberToDisplay);
};
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //here the event listener will create an event and when it activates it will run the given code
    const value = btn.innerText; //this recieves the inner text of each button when clicked
    buttonAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.0";
};

const calculateTotal = () => {
  const total = eval(numberToDisplay); //eval function will evaluate the string expression and makes the calculation
  numberToDisplay = total.toString();
  display(numberToDisplay);
};
