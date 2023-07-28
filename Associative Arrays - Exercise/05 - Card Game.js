function solve(arr) {
    let value = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'S': 4, 'H': 3, 'D': 2, 'C': 1 }
    let players = {};
    for (const turn of arr) {
        let tempInfo = turn.split(": ");
        let cardDraw = tempInfo[1].split(", ")
        if(!players.hasOwnProperty(tempInfo[0])){
            players[tempInfo[0]] = [];
        }
        cardDraw.forEach(element => {
            players[tempInfo[0]].push(element);
        });
    }
    for (const key in players) { 
        let count = 0;               
        let endHand = new Set(players[key]);
        endHand.forEach(el => {
            if(el.length === 3){
                count += 10*value[el[2]];
            }
            else if(!isNaN(el[0])){
                count += Number(el[0])*value[el[1]];
            }
            else{
                count += value[el[0]]*value[el[1]];
            }
        })
        console.log(`${key}: ${count}`)
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)