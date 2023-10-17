function solve(arr) {
    let dictionary = {};
    tempArr = arr[0].split(" | ");
    tempArr.forEach(element => {
        words = element.split(": ");
        if (!dictionary.hasOwnProperty(words[0])) {
            dictionary[words[0]] = [];
            dictionary[words[0]].push(words[1])
        }
        else {
            dictionary[words[0]].push(words[1])
        }
    });
    let testArr = arr[1].split(" | ")

    if(arr[2]==="Test"){
        testArr.forEach(element => {
            if(dictionary.hasOwnProperty(element)){
                console.log(`${element}:`);
                dictionary[element].forEach(a => {
                    console.log(` -${a}`)                    
                });
            }            
        });
    }
    else{
        let dicArr = Object.keys(dictionary).join(" ");
        console.log(dicArr);
    }
}
solve((["programmer: an animal, which turns coffee into code | developer: a magician",

"fish | domino",

"Hand Over"]))