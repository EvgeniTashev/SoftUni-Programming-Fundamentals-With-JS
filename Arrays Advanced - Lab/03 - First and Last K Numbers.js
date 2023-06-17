function solve(arr) {

    let k = arr.shift();

    arrFromFront();
    arrFromBack();


    function arrFromBack() {

        let secondLine = "";

        for (i = 0; i < arr.length && i < k; i++) {
            let tempNum = arr.length + i - k;
            secondLine += `${arr[tempNum]} `;
        }

        console.log(secondLine);

    }


    function arrFromFront() {

        let firstLine = "";

        for (i = 0; i < arr.length && i < k; i++) {

            firstLine += `${arr[i]} `;
        }

        console.log(firstLine);

    }
}
solve([3,
    6, 7, 8, 9])