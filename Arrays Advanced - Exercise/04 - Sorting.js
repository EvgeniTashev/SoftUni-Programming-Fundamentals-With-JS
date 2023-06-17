function solve(arr) {

    let newArr = [];
    let tempArr = arr.sort((a, b) => a - b);

    for (i = 0; i < tempArr.length / 2; i++) {

        if (tempArr.length - 1 - i === i) {

            newArr.push(tempArr[i]);
        }

        else {

            newArr.push(tempArr[tempArr.length - 1 - i]);
            newArr.push(tempArr[i]);
        }

    }

    console.log(newArr.join(" "));

}