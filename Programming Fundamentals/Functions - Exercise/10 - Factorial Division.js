function factDiv(numA, numB) {

    let result = findFact(numA) / findFact(numB)
    console.log(result.toFixed(2));

    function findFact(x) {

        let tempNum = 1;

        for (i = 2; i <= x; i++) {

            tempNum *= i;
        }

        return tempNum;
    }

}
