function solve(word, text){
    let arr = text.split(" ");
    let test = true;
    for (const a of arr) {  
        if(a.toLowerCase() === word.toLowerCase()){
            console.log(word);            
            test = false;
            break;
        }        
    }
    if(test){
        console.log(`${word} not found!`)
    }
}

solve()