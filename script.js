const allButtons = document.querySelectorAll(".btn"); //accessing all the buttons
// console.log(allButtons);
const ACbuttonElm = document.querySelector(".btn-AC");
const displayElm = document.querySelector(".topdisplay");
let numberToDisplay = "";
const buttonAction = (value) => {
  //created a separte function for the button action inorder to minimise the code in the loop
  if (value === ACbuttonElm.innerText) {
    numberToDisplay = "";
    return display(numberToDisplay);
  }
  numberToDisplay += value;
  display(numberToDisplay);
};
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //here the event listener will create an event and when it activates it will run the given code
    const value = btn.innerText; //this recieves the inner text of each button when clicked
    buttonAction(value);
    // console.log(numberToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.0";
};
