function solve(text){
    let arr = [];   
    for (i=1; i<text.length; i++){
        if(text[i].match(/^[A-Z\s]*$/)){    
            arr.push(text.slice(0,i));
            text = text.slice(i);
            i = 0;
        }
    }
    arr.push(text)
    let dump = arr.shift();
    let endText = arr.join(", ")
    console.log(endText)
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')