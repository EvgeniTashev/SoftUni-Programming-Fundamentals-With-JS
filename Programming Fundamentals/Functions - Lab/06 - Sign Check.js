function check(numOne, numTwo, numThree) {

    let arr = [];

    arr.push(numOne);
    arr.push(numTwo);
    arr.push(numThree);

    let count = 0;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            count++;

        }

    }

    count % 2 == 0 ? console.log("Positive") : console.log("Negative");


}