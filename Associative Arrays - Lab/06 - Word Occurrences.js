function solve(arr){
    let wordList = {};
    for (let a of arr){ 
        if (!wordList.hasOwnProperty(a)){
            wordList[a] = 1;
        }
        else{
            wordList[a] += 1;
        }
    }
    let sortedList = Object.entries(wordList).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    for (let key in sortedList){
        console.log(`${key} -> ${sortedList[key]} times`)

    }
}

solve(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
)