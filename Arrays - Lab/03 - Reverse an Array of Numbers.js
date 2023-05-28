function solve(n, index){
    let newArr = [];
    for (i = 0; i < n; i++){
        newArr[i] = index[i];
    }
    let output = "";
    for (i = newArr.length-1; i>=0; i--){
        output += `${newArr[i]} `;
    }
    console.log(output)
}