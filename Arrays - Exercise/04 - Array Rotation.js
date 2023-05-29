function rota(input, num){
    let tempNum = 0;
    while (num > 0){
        tempNum = input.shift();
        input.push(tempNum);
        num--;
    }
    console.log(input.join(" "));
}  