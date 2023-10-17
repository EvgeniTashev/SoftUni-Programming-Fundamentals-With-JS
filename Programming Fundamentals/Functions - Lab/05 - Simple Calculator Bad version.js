function calculator(numOne, numTwo, operation) {

    let multiply = (a, b) => a * b;

    let divide = (a, b) => a / b;

    let add = (a, b) => a + b;

    let subtract = (a, b) => a - b;

    console.log(eval(operation + "(numOne, numTwo)"));

}