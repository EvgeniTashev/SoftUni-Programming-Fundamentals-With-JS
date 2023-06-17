function passVal(pass) {

    if (!checkLength(pass)) {

        console.log("Password must be between 6 and 10 characters")
    }

    if (!checkForSymbols(pass)) {

        console.log("Password must consist only of letters and digits")
    }

    if (!numOfNumbers(pass)) {

        console.log("Password must have at least 2 digits")
    }

    if (numOfNumbers(pass) && checkForSymbols(pass) && checkLength(pass)) {

        console.log("Password is valid")
    }

    function checkLength(lengthTest) {

        return (lengthTest.length > 5 && lengthTest.length < 11);
    }

    function checkForSymbols(test) {

        return test.match(/^[A-Za-z0-9]*$/) !== null;
    }

    function numOfNumbers(numNum) {

        let tempNum = 0;
        let arr = pass.split("");

        for (i = 0; i < arr.length; i++) {

            if (!isNaN(arr[i])) {
                tempNum++;
            }

        }

        return tempNum > 1;

    }

}