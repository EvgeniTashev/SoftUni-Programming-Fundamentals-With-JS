function merge(arrOne, arrTwo) {

    let newArr = [];

    for (index = 0; index < arrOne.length; index++) {

        let arrSum = Number(arrOne[index]) + Number(arrTwo[index]);
        let arrSub = arrOne[index].toString() + arrTwo[index].toString();
        index % 2 === 0 ? newArr[index] = arrSum : newArr[index] = arrSub;

    }

    console.log(newArr.join(" - "));
    
}