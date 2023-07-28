function Delve(input) {

    let hp = 100;
    let gold = 0;
    let arr = input[0].split("|");

    for (index = 0; index < arr.length; index++) {

        let room = arr[index].split(" ");

        if (room[0] == "potion") {

            if ((hp + Number(room[1])) > 100){
                
            console.log(`You healed for ${100 - hp} hp.`);
            hp = 100;
            console.log(`Current health: 100 hp.`);

            }

            else{

                console.log(`You healed for ${Number(room[1])} hp.`);
                hp += Number(room[1]);
                console.log(`Current health: ${hp} hp.`);

            }

        }

        else if (room[0] == "chest") {

            console.log(`You found ${Number(room[1])} coins.`);
            gold += Number(room[1]);

        }

        else {

            hp -= Number(room[1]);

            if (hp <= 0) {

                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${index + 1}`)
                return;

            }

            else {

                console.log(`You slayed ${room[0]}.`);

            }
        }
    }
    console.log(`You've made it!`);

    console.log(`Coins: ${gold}`);

    console.log(`Health: ${hp}`);

}