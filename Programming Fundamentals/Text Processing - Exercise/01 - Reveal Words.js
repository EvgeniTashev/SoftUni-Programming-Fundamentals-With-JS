function solve(words, text){
    let newWords = words.split(", ")
    for (const iterator of newWords) {    
        let target = "*".repeat(iterator.length);
        text = text.replace(target, iterator);        
    }
    console.log(text)

}

solve('great, learning',
'softuni is ***** place for ******** new programming languages')