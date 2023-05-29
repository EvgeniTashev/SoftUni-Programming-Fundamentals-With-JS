function solve(input) {
    let oldArrSum = 0;
    let newArrSum = 0;
    let arrLength = input.length;
    for (index = 0; index < arrLength; index++) {
        let currentNum = Number(input[index]);
        oldArrSum += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += index;
        }
        else {
            currentNum -= index;
        }
        newArrSum += currentNum;
        input[index] = currentNum;

    }
    console.log(input);
    console.log(oldArrSum);
    console.log(newArrSum);
}