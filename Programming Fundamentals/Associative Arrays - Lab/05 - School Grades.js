function solve(arr) {
    let info = {};
    for (let a of arr) {
        let tempInfo = a.split(" ");
        let name = tempInfo.shift();
        if (!info.hasOwnProperty(name)) {
            info[name] = tempInfo;
        }
        else {
            info[name] = info[name].concat(tempInfo);
        }
    }
    let sortedBook = Object.keys(info).sort().reduce((val, key) => {val[key] = info[key]; return val;}, {})
    for (let key in sortedBook) {
        let tempGrade = 0;
        let gradeCount = 0;
        for (let x of sortedBook[key]) {
            tempGrade += Number(x);
            gradeCount++;
        }
        let endGrade = (tempGrade / gradeCount).toFixed(2);
        console.log(`${key}: ${endGrade}`);
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])