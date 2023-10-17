function solve(arr) {

    let newArr = arr.filter((element, index) => {

        return arr.indexOf(element) === index;
    });

    console.log(newArr.join(" "));
    
}