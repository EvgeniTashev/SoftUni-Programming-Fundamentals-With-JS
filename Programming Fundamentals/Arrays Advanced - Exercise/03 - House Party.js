function solve(arr) {

    let list = [];

    for (i = 0; i < arr.length; i++) {

        let tempArr = arr[i].split(" ");

        if (arr[i].includes("not")) {

            isNotComing(tempArr[0]);
        }

        else {

            isComing(tempArr[0]);
        }
    }

    function isNotComing(a) {

        if (list.includes(a)) {

            let z = list.indexOf(a)
            list.splice(z, 1);
        }

        else {

            console.log(a + " is not in the list!")
        }
    }
    function isComing(a) {

        if (!list.includes(a)) {

            list.push(a);
        }
        else {

            console.log(a + " is already in the list!")
        }
    }

    list.map((a) => console.log(a))
}