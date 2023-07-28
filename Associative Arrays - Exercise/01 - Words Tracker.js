function solve(arr){
    let counter = {};
    let target = arr.shift().split(" ");
    for (let a of target){ 
        if (!counter.hasOwnProperty(a)){
            counter[a] = 0;
        }
    }
    for (let x of arr){
        if (counter.hasOwnProperty(x)){
            counter[x] += 1;
        }
    }
    let sortedList = Object.entries(counter).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    for (let key in sortedList){
        console.log(`${key} - ${sortedList[key]}`)

    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    )