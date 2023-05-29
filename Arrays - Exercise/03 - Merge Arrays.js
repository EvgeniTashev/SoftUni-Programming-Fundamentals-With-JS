function merge(arrOne, arrTwo) {
    let newArr = [];
    for (index = 0; index < arrOne.length; index++) {
        index % 2 === 0 ? newArr[index] = Number(arrOne[index]) + Number(arrTwo[index]) : newArr[index] = arrOne[index].toString() + arrTwo[index].toString();
    }
    console.log(newArr.join(" - "));
}