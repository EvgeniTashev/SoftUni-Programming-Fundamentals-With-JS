function solve(input) {
    if (input.length == 1 || (input.length == 2 && input[0] == 0)) {
        console.log("0");
    }
    else {
        let arrLength = input.length;
        let leftSum = 0;
        let rightSum = 0;
        let index = 0;
        for (x = 1; x <= arrLength; x++) {
            let tempIndex = 0;
            while (tempIndex < index + 1) {
                leftSum += input[tempIndex];
                tempIndex++;
            }
            //console.log(leftSum)
            while (arrLength > index) {
                rightSum += input[arrLength - 1];
                arrLength--;
            }
            // console.log(rightSum)
            arrLength = input.length;
            if (leftSum == rightSum) {
                console.log(index);
                break;
            }
            else if (index == arrLength-1) { console.log("no")
            }
            index++;
            leftSum = 0;
            rightSum = 0;

        };
    }
}
solve([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]
    
)