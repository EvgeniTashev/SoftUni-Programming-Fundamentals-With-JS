function name(num){
    let lastNum = 0;
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    if (num > 10){

        lastNum = num%10;

    }

    else lastNum = num;

    console.log(arr[lastNum]);

}