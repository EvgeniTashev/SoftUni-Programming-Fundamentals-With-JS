function sub(index){
    let sumEven = 0;    
    let sumOdd = 0;
    for (let num of index){
        if (num % 2 == 0) {
            sumEven += Number(num);
        }
        else {
            sumOdd += Number(num);
        }
    }
    console.log(sumEven-sumOdd);
}