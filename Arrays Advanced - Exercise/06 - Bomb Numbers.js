function solve(sequence, bombInfo) {

    let tempArr = sequence;
    let bombNumber = bombInfo[0];
    let bombRange = Math.abs(bombInfo[1]);

    while (tempArr.includes(bombNumber)) {

        detonate(bombNumber, bombRange);
    }

    let result = 0;
    // for (i = 0; i < tempArr.length; i++) {
    //     result += tempArr[i];
    // }
    tempArr.length > 0 ? result = tempArr.reduce((a, b) => a + b) : result = 0;
    console.log(result);

    function detonate(a, b) {

        let z = tempArr.indexOf(a);
        let startingIndex = 0;
        z - b < 0 ? startingIndex = 0 : startingIndex = z - b;
        tempArr.splice(startingIndex, 2 * b + 1);
    }

}