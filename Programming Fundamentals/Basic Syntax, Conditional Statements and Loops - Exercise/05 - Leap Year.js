function solve(num){
    let res;
    if (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)){
        res = `yes`;
    }
    else { 
        res = `no`;
    }
    console.log(res);
}