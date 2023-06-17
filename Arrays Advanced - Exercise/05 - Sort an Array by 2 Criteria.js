function solve(arr){

    let newArr = arr.sort();    
    newArr = newArr.sort((a,b)=> a.length - b.length);
    
    newArr.map(a => console.log(a));

}