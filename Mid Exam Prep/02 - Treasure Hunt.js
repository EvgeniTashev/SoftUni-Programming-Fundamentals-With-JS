function solve(noTouchyTouchy) {

    let arr = noTouchyTouchy.slice(0)
    let chestContent = arr.shift().split("|");
    let money = 0;

    for (i = 0; i < arr.length; i++) {

        let tempArr = arr[i].split(" ");

        switch (tempArr[0]) {
            case "Loot":
                actionLoot(arr[i]);
                break;

            case "Drop":

                actionDrop(arr[i]);
                break;
            case "Steal":

                actionSteal(arr[i]);
                break;

            case "Yohoho":
                return;
        }
    }



    function actionLoot(a) {
        let tempArr = a.split(" ");
        for (y = 1; y < tempArr.length; y++) {

            if (!chestContent.includes(tempArr[y])) {
                chestContent.unshift(tempArr[y]);
            }
        }
        return;
    }

    function actionDrop(a) {

        let tempArr = a.split(" ");
        let tempNum = Number(tempArr[1]);

        if (tempNum >= 0 && tempNum < chestContent.length) {

            let splicedNum = chestContent.splice(tempNum, 1)
            chestContent.push(splicedNum.toString());
        }

    }

    function actionSteal(a) {

        let tempArr = a.split(" ");
        let tempNum = Number(tempArr[1]);

        if (tempNum > chestContent.length) {

            tempNum = chestContent.length;
        }

        let stolenItems = chestContent.splice(-tempNum);
        console.log(stolenItems.join(", "));
    }

    chestContent.map(a => money += a.length);

    money > 0 ? console.log(`Average treasure gain: ${(money / chestContent.length).toFixed(2)} pirate credits.`) : console.log("Failed treasure hunt.");

}

//break ideas: steal more than once, drop more than one item






// solve((["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]))
// console.log("------------")
solve((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]))