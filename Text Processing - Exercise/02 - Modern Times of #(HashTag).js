function solve(text){
    let arr = text.split(" ");
    let targetArr = [];
    for (const iterator in arr) {
        if (arr[iterator].includes("#")&&arr[iterator].length>1){
            targetArr.push(arr[iterator]);
        }
    }
    for (const key in targetArr) {
        let tempText = targetArr[key].substring(1);
        if (tempText.match(/^[A-Za-z\s]*$/)){
            console.log(tempText)
        }
        
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia'
)