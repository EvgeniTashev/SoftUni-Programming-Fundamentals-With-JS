function solve(text, word){
    let censure = "*"
    censure = censure.repeat(word.length)

    
    while(text.includes(word)){
        text = text.replace(word, censure)
    }
    console.log(text)
}

solve('A small sentence with some words',
'small'
)