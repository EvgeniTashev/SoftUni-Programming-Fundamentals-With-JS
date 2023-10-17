function solve(arrOne, arrTwo){
    let sum = 0;
    for (i = 0; i < arrOne.length; i++){
        if (arrOne[i]===arrTwo[i]){
            sum += Number(arrOne[i]);
        }        
        else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (i === arrOne.length){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}