//create array to store values
const arr = [];

//store the buttons on a variable
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.value);
    })
})