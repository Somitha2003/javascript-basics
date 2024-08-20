// Task 1: Simple Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator!";
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Task 2: Array Operations (Sum and Average)
function calculateArray() {
    const arrayInput = document.getElementById('arrayInput').value;
    const arr = arrayInput.split(',').map(Number);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    const average = arr.reduce((a, b) => a + b, 0) / arr.length;

    document.getElementById('sumResult').innerText = `Sum of even numbers: ${sum}`;
    document.getElementById('avgResult').innerText = `Average of all numbers: ${average.toFixed(2)}`;
}

// Task 3: Object Manipulation
const Person = {
    firstName: "",
    lastName: "",
    age: 0,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    incrementAge: function() {
        this.age++;
    }
};

function showPersonInfo() {
    Person.firstName = document.getElementById('firstName').value;
    Person.lastName = document.getElementById('lastName').value;
    Person.age = parseInt(document.getElementById('age').value);

    document.getElementById('personInfo').innerText = `Full Name: ${Person.getFullName()} | Age: ${Person.age}`;
}

function incrementPersonAge() {
    Person.incrementAge();
    document.getElementById('personInfo').innerText = `Full Name: ${Person.getFullName()} | Age: ${Person.age}`;
}
