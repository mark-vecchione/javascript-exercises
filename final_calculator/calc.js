let displayValue = ''; // Tracks the current display value

// Function to update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

// Function to append value to the display
function appendValue(value) {
    displayValue += value;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Function to calculate the result without using eval
function calculateResult() {
    try {
        const result = evaluateExpression(displayValue);
        displayValue = result.toString();
    } catch (error) {
        displayValue = 'Error'; // Handle invalid inputs
    }
    updateDisplay();
}

// Custom function to evaluate mathematical expressions
function evaluateExpression(expression) {
    const tokens = expression.match(/(\d+|[+\-*/])/g); // Tokenize the input
    if (!tokens) {
        throw new Error('Invalid expression');
    }

    const operators = [];
    const values = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            // If the token is a number, add it to the values stack
            values.push(parseInt(token, 10));
        } else if (['+', '-', '*', '/'].includes(token)) {
            // If the token is an operator, process based on precedence
            while (
                operators.length > 0 &&
                precedence(token) <= precedence(operators[operators.length - 1])
            ) {
                compute(operators, values);
            }
            operators.push(token);
        }
    }

    // Compute remaining operators
    while (operators.length > 0) {
        compute(operators, values);
    }

    return values.pop();
}

// Helper function to compute a single operation
function compute(operators, values) {
    const operator = operators.pop();
    const b = values.pop();
    const a = values.pop();

    switch (operator) {
        case '+':
            values.push(a + b);
            break;
        case '-':
            values.push(a - b);
            break;
        case '*':
            values.push(a * b);
            break;
        case '/':
            if (b === 0) {
                throw new Error('Division by zero');
            }
            values.push(Math.floor(a / b)); 
            break;
        default:
            throw new Error('Invalid operator');
    }
}

// Helper function to define operator precedence
function precedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    }
    if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0;
}

