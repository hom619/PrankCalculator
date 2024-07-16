const allButtons = document.querySelectorAll(".btn"); //accessing all the buttons
// console.log(allButtons);
const ACbuttonElm = document.querySelector(".btn-AC");
const displayElm = document.querySelector(".topdisplay");
const equalElm = document.querySelector(".btn-equal");
let numberToDisplay = "";
const buttonAction = (value) => {
  //created a separte function for the button action inorder to minimise the code in the loop
  if (value === ACbuttonElm.innerText) {
    numberToDisplay = "";
    return display(numberToDisplay);
  }
  if (value === equalElm.innerText) {
    return calculateTotal();
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
  display(total);
};
