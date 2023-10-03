function solve(text){
    let midPoint = text.length/2;
    let textOne = text.substring(0, midPoint)
    let textTwo = text.substring(midPoint);
    let wordOne = textOne.split("").reverse().join("");
    let wordTwo = textTwo.split("").reverse().join("");
    console.log(wordOne);
    console.log(wordTwo);

}

solve('tluciffiDsIsihTgnizamAoSsIsihT')