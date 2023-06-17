function solve(arr) {

    for (index = 0; index < arr.length; index++) {

        if (reverseNum(arr[index])) {

            console.log(`true`)
        }

        else {

            console.log("false")
        }

    }

    function reverseNum(x) {

        let tempNum = x.toString();
        tempNum = tempNum.split("").reverse().join("");
        return x == tempNum;
    }
}