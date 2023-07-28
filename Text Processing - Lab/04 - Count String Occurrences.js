function solve(text, word) {
    let index = 0;
    let arr = text.split(" ");
    arr.forEach(element => {
        if(element === word){
            index++;
        }
    });
    console.log(index)
}

solve('This is a word and it also is a sentence',
    'is')