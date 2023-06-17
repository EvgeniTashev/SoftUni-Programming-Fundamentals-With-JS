function matrix(num) {

    let rowText = "";

    for (i = 0; i < num; i++) {

        console.log(rowBuilding(num));
        rowText = "";
    }

    function rowBuilding(x) {

        for (tempNum = 0; tempNum < x; tempNum++) {

            //console.log(x)
            //console.log(tempNum)
            rowText += `${x} `
        }

        return rowText;

    }

}