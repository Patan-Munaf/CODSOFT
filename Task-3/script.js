const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATORS = ['+', '-', '*', '/'];
function handleKeyPress(key) {
    console.log(`Handling key press: ${key}`);
    const currentValue = display.value;
    if (NUMBERS.includes(key)) {
        display.value = currentValue + key;
    } 
    else if (OPERATORS.includes(key)) {
        if (OPERATORS.includes(currentValue[currentValue.length - 1])) {
            display.value = currentValue.slice(0, -1) + key;
        } else {
            display.value = currentValue + key;
        }
    } 
    else if (key === 'Enter' || key === '=') {
        try {
            display.value = calculateResult(currentValue);
        } catch (error) {
            display.value = 'Error';
        }
    } 
    else if (key === 'Backspace') {
        display.value = currentValue.slice(0, -1);
    } 
    else if (key === 'Escape') {
        display.value = '';
    } 
    else if (key === 'Clear' || key === 'C') {
        display.value = '';
    }
}
function calculateResult(expression) {
    return Function('"use strict";return (' + expression + ')')();
}
document.addEventListener('keydown', (event) => {
    console.log(`Keydown event: ${event.key}`);
    handleKeyPress(event.key);
});
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', () => {
        console.log(`Clicked key: ${key.textContent}`);
        handleKeyPress(key.textContent);
    });
});