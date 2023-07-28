function solve(noTouchyTouchy) {

    let arr = noTouchyTouchy.slice(0);
    let pirateShip = arr.shift().split(">").map(Number);
    let warship = arr.shift().split(">").map(Number);
    let maxHP = Number(arr.shift());
    let warshipStatus = true;
    let pirateShipStatus = true;

    for (i = 0; i < arr.length; i++) {

        if (!warshipStatus) {

            console.log("You won! The enemy ship has sunken.");
            return;
        }

        if (!pirateShipStatus) {

            console.log("You lost! The pirate ship has sunken.");
            return;
        }

        let tempArr = arr[i].split(" ");
        let command = tempArr.shift();
        tempArr = tempArr.map(Number);

        switch (command) {

            case "Fire":
                actionFire(tempArr);
                break;

            case "Defend":
                actionDefend(tempArr);
                break;

            case "Repair":
                actionRepair(tempArr);
                break;

            case "Status":
                actionStatus(tempArr);
                break;
            case "Retire":
                actionRetire();
                return;
        }
    }

    function actionFire(q) {

        if (q[0] >= 0 && q[0] < warship.length) {

            warship[q[0]] -= q[1];

            if (warship[q[0]] <= 0) {

                warshipStatus = false;
            }
            return;
        }
    }


    function actionDefend(q) {

        if ((q[0] >= 0 && q[0] < pirateShip.length) && (q[1] >= 0 && q[1] < pirateShip.length)) {

            for (y = q[0]; y <= q[1]; y++) {

                pirateShip[y] -= q[2];

                if (pirateShip[y] <= 0) {
                    
                    pirateShipStatus = false;
                }

            }
            return;
        }
    }


    function actionRepair(q) {

        if (q[0] >= 0 && q[0] < pirateShip.length) {

            pirateShip[q[0]] + q[1] > maxHP ? pirateShip[q[0]] = maxHP : pirateShip[q[0]] += q[1];
            return;
        }
    }


    function actionStatus(q) {

        let tempNum = 0;
        pirateShip.map(a => a < maxHP * 0.2 && tempNum++);
        console.log(tempNum + " sections need repair.");
        return;
    }

    function actionRetire() {

        let pirateShipSum = 0;
        pirateShip.map(a => pirateShipSum += a);
        let warshipSum = 0;
        warship.map(a => warshipSum += a);
        console.log(`Pirate ship status: ${pirateShipSum}`)
        console.log(`Warship status: ${warshipSum}`)
    }
}


//possible break: defend indexes large and small.


solve((["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
)
console.log("--------------")
solve((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
)