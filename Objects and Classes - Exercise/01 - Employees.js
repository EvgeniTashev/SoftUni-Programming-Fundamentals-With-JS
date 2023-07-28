function solve(arr){  
    let obj = {}

    for (const name of arr) {
        obj[name] = name.length;      
    }
    for (let x in obj){
        console.log(`Name: ${x} -- Personal Number: ${obj[x]}`)
    }

}
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )