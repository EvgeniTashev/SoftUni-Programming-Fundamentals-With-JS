function magic(arr, n) {

    let firstNum = 0;
    let secondNum = 0;

    for (index = 0; index < arr.length; index++) {

        firstNum = arr[index];

        for (indexTwo = index+1; indexTwo <= arr.length; indexTwo++) {

            secondNum = arr[indexTwo];
            if (firstNum + secondNum == n) {

                console.log(`${firstNum} ${secondNum}`)

            }
        }
    }
}