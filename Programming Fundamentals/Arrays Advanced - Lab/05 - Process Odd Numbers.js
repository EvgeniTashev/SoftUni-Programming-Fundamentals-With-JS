function solve(arr){

    let newArr = arr.filter((a, i) => i % 2 !== 0);
    
    newArr.reverse();
    newArr= newArr.map(a => a*2);

    console.log(newArr.join(" "));   

}