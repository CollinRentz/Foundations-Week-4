const button = document.querySelector('button');
console.log(button);
const buttonClicked = (button) => {
    button.preventDefault()
    console.log('Button Clicked');
}
button.addEventListener('click', buttonClicked);