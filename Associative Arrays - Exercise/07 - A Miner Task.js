function solve(arr){    
    let miningBag = {};
    for (let i = 0; i < arr.length; i+=2){
        if(miningBag.hasOwnProperty(arr[i])){
            miningBag[arr[i]] += Number(arr[i+1]);
        } 
        else{
            miningBag[arr[i]] = Number(arr[i+1]);
        }
    }
    for (const key in miningBag) {
        console.log(`${key} -> ${miningBag[key]}`)    
    }

}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )