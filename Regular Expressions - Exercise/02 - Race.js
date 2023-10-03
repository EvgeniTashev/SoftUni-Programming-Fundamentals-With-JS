function solve(arr) {
    let nameList = arr.shift().split(", ");
    let list = {};
    for (const name of nameList) {
        list[name] = 0;
    }
    for (const code of arr) {
        if (code === 'end of race') {
            break;
        }
        let nameStructure = "";
        let kmRan = 0;
        for (const char of code) {
            if (char.match(/[A-Za-z]/)) {
                nameStructure += char;
            }
            else if (char.match(/\d/)) {
                kmRan += Number(char);
            }

        }
        if (list.hasOwnProperty(nameStructure)){
            list[nameStructure]+=kmRan;
        }

    }
    let sortedList = Object.keys(list).sort((a,b)=>list[b]-list[a]);
    console.log(`1st place: ${sortedList[0]}`);
    console.log(`2nd place: ${sortedList[1]}`);
    console.log(`3rd place: ${sortedList[2]}`);
}   

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])