const calculator = {
    add: function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    },
    min: function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    },
    div: function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    },
    mul: function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    },
    powerOf: function (firstNumber, secondNumber) {
        return firstNumber ** secondNumber;
    },
}

const plusResult = calculator.add(2, 4);