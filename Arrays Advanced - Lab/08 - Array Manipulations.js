function solve(arr) {

    let newArr = arr.shift().split(" ");
    newArr = newArr.map(Number);

    for (i = 0; i < arr.length; i++) {

        let [command, firstNum, secondNum] = arr[i].split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {

            case "Add":
                newArr.push(firstNum);
                break;

            case "Remove":
                newArr = newArr.filter(a => a !== firstNum);
                break;

            case "RemoveAt":
                newArr.splice(firstNum, 1);
                break;
                
            case "Insert":
                newArr.splice(secondNum, 0, firstNum);
                break;
        }

    }

    console.log(newArr.join(" "));

}