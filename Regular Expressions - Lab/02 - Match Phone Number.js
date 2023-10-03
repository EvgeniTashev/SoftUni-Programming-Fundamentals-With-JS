function solve(input){
    let regex = /\+359([- ])2\1\d{3}\1\d{4}\b/gm;
    let phones = [];
    let x = regex.exec(input);
    while(x){
        phones.push(x[0]);
        x = regex.exec(input);
    }
    console.log(phones.join(", "))
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])