const allButtons = document.querySelectorAll(".btn"); //accessing all the buttons
// console.log(allButtons);

let numberToDisplay = "";
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //here the event listener will create an event and when it activates it will run the given code
    const value = btn.innerText; //this recieves the inner text of each button when clicked
    numberToDisplay += value;
    // console.log(numberToDisplay);
  });
});
