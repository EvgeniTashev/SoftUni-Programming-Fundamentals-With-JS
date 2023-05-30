function mine(arr) {

    let bitCoin = 0;
    let gold = 0;
    let firstDay;
    let money = 0;

    for (index = 0; index < arr.length; index++) {

        if ((index + 1) % 3 == 0) {

            gold = Number(arr[index] * 0.7)

        }
        else {

            gold = arr[index];

        }

        money += gold * 67.51;

        while (money >= 11949.16) {

            money -= 11949.16;

            if (bitCoin === 0) {

                firstDay = index + 1;

            }

            bitCoin++;

        }

    }

    console.log(`Bought bitcoins: ${bitCoin}`)

    if (bitCoin !== 0) {

        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`)

}