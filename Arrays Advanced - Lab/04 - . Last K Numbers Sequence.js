function solve(numOne, numTwo){

    let arr = [1];
    
    while(numOne > arr.length){

        let tempArr = arr.slice(-numTwo);        
        let sum = 0;

        for (let i = 0; i < tempArr.length; i++){

            sum += tempArr[i];
        }

        arr.push(sum);
    }    
    console.log(arr.join(" "))
}