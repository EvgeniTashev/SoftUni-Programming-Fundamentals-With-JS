function solve(word) {
    let newText = "";
    for (i = 0; i < word.length; i++) {
        if (word[i] !== word[i + 1]) {
            newText = newText.concat(word[i])
        }
    }
    console.log(newText)
}
solve('aaaaabbbbbcdddeeeedssaa')