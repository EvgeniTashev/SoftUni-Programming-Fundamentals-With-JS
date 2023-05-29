function max(input){
    let output = "";
    let arrLength = input.length;
    for (index = 0; index < arrLength; index++){
        let nextIndex = index;
        while (nextIndex < arrLength+1){
            nextIndex++;
            if (input[index]<=input[nextIndex]){
                break;
            }
            else if (nextIndex == arrLength) {  
                output += `${input[index]} `;               
            }
        }
    }
    console.log(output);
}