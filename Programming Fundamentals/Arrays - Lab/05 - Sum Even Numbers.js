function sum(index){
    let sum = 0;
    for (let num of index){
        if (num % 2 == 0) {
            sum += Number(num);
        }
    }
    console.log(sum);
}