function appendToDisplay(value) {
    document.querySelector('.display').value += value;
}

function calculate() {
    var displayValue = document.querySelector('.display').value;
    try {
        document.querySelector('.display').value = eval(displayValue);
    } catch (error) {
        document.querySelector('.display').value = 'Error';
    }
}

function clearDisplay() {
    document.querySelector('.display').value = '';
}

// Keyboard support
window.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[\d.+\-*/]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});