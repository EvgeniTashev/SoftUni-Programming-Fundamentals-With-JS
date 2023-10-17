function negOrPos(arr) {
    let newArr = [];
    
    createNewArr();
    printNewArr();


    function createNewArr() {

        for (i = 0; i < arr.length; i++) {

            let tempNum = arr[i];

            if (tempNum < 0) {

                newArr.unshift(tempNum);
            }

            else {

                newArr.push(tempNum);
            }
        }
    }


    function printNewArr() {

        for (y = 0; y < newArr.length; y++) {

            console.log(newArr[y]);
        }
    }

}