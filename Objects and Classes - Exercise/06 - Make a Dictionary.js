function solve(arr){
    let dictionary = {};
    let tempArr = [];
    arr.forEach(element => {
        tempArr.push(JSON.parse(element));
    });    
    dictionary = tempArr.reduce((a,b) => Object.assign(a,b));
    let sortedDictionary = Object.keys(dictionary).sort().reduce((objEntries, key) => {
        objEntries[key] = dictionary[key];        
        return objEntries;        
        }, {});

    for (const key in sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${sortedDictionary[key]}`)
                   
        
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}','{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}','{"Boiler":"A fuel-burning apparatus or container for heating water."}','{"Tape":"A narrow strip of material, typically used to hold or fasten something."}','{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']
    )