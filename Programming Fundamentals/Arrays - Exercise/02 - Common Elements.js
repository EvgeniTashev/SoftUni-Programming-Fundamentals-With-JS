function solve(arrOne, arrTwo) {
    let arrLengthOne = arrOne.length;
    for (index = 0; index < arrLengthOne; index++) {
        let currentVar = arrOne[index];
        if (arrTwo.includes(currentVar)) {
            console.log(currentVar);
        }
    }
}