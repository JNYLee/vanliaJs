function sayHello(nameOfPerson, age) {
    console.log("hello! my name is "+ nameOfPerson+ "my age is"+ age);
}

sayHello("Nico", 10);
sayHello("Dal", 23);
sayHello("Flynn", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

plus(8, 60);
divide(64 / 4);

const player = {
    name: "nico",
    sayHello: function(otherPerson) {
        console.log("hello! "+ otherPerson+ "nice to meet you");
    }
}
player.sayHello("nico");
