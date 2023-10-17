function solve(arr){
    let info = new Set();
    for (const a of arr) {
        let tempInfo = a.split(", ");
        if(tempInfo[0] === "IN"){
            info.add(tempInfo[1]);
        }
        else{
            info.delete(tempInfo[1]);
        }

    }
    let result = Array.from(info).sort();
    if(result[0]===undefined){
        console.log(`Parking Lot is Empty`)
    }
    else{
        for (const key in result) {
                     console.log(result[key])
        }
    }

}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)