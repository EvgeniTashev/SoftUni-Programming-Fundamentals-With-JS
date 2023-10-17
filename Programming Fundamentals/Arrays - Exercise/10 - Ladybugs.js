function solve(arr) {

    let fieldArr = [];
    createField();
    ladybugPosition();
    directions();
    console.log(fieldArr.join(" "));


    function createField() {

        for (fieldIndex = 0; fieldIndex < arr[0]; fieldIndex++) {

            fieldArr.push(0);
        }
        //console.log(fieldArr.join(" "));
    }



    function ladybugPosition() {

        let ladybugArr = arr[1].split(" ");
        //console.log(ladybugArr)
        ladybugArr = ladybugArr.filter(function (x) { return x > -1 });        
        ladybugArr = ladybugArr.filter(function (x) { return x <= fieldArr.length });
        //console.log(ladybugArr)
        for (y = 0; y < arr[0]; y++) {

            fieldArr[ladybugArr[y]] = 1;
        }
        //console.log(fieldArr.join(" "));
    }



    function directions() {

        for (directionIndex = 2; directionIndex < arr.length; directionIndex++) {

            let directionArr = arr[directionIndex].split(" ");
            if(directionArr[0]< 0 || directionArr[0] >= fieldArr.length){
                break;
            }

            switch (directionArr[1]) {

                case "right": flyRight(Number(directionArr[0]), Number(directionArr[2]));
                    //console.log(fieldArr.join(" "))
                    break;

                case "left": flyLeft(Number(directionArr[0]), Number(directionArr[2]));
                    //console.log(fieldArr.join(" "));
                    break;
            }
        }
    }



    function flyRight(lbIndex, flyLength) {

        if (fieldArr[lbIndex] === 1) {

            for (flyOver = 0; flyOver <= fieldArr.length - lbIndex; flyOver++) {

                if (flyLength + lbIndex + flyOver > fieldArr.length) {

                    fieldArr[lbIndex] = 0;
                    return;
                }

                else if (fieldArr[lbIndex + flyOver + flyLength] === 0) {

                    fieldArr[lbIndex + flyOver + flyLength] = 1;
                    fieldArr[lbIndex] = 0;
                    return;
                }
            }
        }
    }


    function flyLeft(lbIndex, flyLength) {

        if (fieldArr[lbIndex] === 1) {


            for (flyOver = 0; flyOver <= (lbIndex - flyLength); flyOver++) {
                if (flyLength < 0) {

                    flyOver = flyOver * -1;
                }
                if ((lbIndex - flyLength < 0 && flyLength > 0) || (flyLength < 0 && lbIndex - (flyLength + flyOver) >= fieldArr.length)) {

                    fieldArr[lbIndex] = 0;
                    return;
                }

                if (fieldArr[lbIndex - (flyOver + flyLength)] === 0) {

                    fieldArr[lbIndex - (flyOver + flyLength)] = 1;
                    fieldArr[lbIndex] = 0;
                    return;
                }

                flyOver = Math.abs(flyOver);
            }
        }
    }
}solve([ 3, '-7 0 1 2 12',
'0 right 1',
'1 right 1' ])