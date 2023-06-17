function solve(arr, info){

    let [one, two, three] = info;   
    let newArr = arr.slice(0, one);

    newArr.splice(0, two);

    let repeat = 0;
    newArr.forEach(a => a===three && repeat++);

    console.log(`Number ${three} occurs ${repeat} times.`)
}