function SumDigits(num) {
    let sum = 0;
    num = num.toString();
    let x = 0;
    while (x < num.length) {
        sum += Number(num[x]);
        x++;
    }
    console.log(sum)
}