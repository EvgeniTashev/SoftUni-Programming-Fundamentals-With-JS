function solve(arr) {
    let arrOne = [];
    let arrTwo = [];
    let name = arr.shift();

    while (name !== 'PARTY') {
        let firstChar = name[0];
        if (isNaN(firstChar)) {
            arrTwo.push(name);
        }
        else {
            arrOne.push(name);
        }
        name = arr.shift()
    }
    let endArr = arrOne.concat(arrTwo);

    for (const x of arr) {
        if (endArr.includes(x)) {
            endArr.splice(endArr.indexOf(x), 1);
        }
    }
    console.log(endArr.length);
    endArr.forEach(x => console.log(x));
}

solve([
    'tSzE5t0p', '7IK9Yo0h',
    '74IK9Yo0h'
    , '72IK9Yo0h',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    '7IK9Yo0h',]


)