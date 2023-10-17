
function solve(numOne, numTwo, numThree) {

    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result = sum(numOne, numTwo);

    let finalResult = subtract(result, numThree);

    console.log(finalResult);
}