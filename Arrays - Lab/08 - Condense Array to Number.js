function solve(index) {
    let newArr = [];
    while (index.length > 1) {
        for (i = 0; i < index.length - 1; i++) {
            newArr[i] = index[i] + index[i + 1];
        }
        index = newArr;
        newArr = [];
    }
    console.log(Number(index));
}