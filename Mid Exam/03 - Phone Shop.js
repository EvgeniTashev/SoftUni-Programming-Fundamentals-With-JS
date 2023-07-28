function phoneShop(input) {

    let inventory = input.shift().split(", ");
    for (i = 0; i < input.length; i++) {
        let tempArr = input[i].split(" - ");
        switch (tempArr[0]) {
            case "Add":
                if (!inventory.includes(tempArr[1])) {
                    inventory.push(tempArr[1]);
                }
                break;
            case "Remove":
                if (inventory.includes(tempArr[1])) {
                    let tempIndex = inventory.indexOf(tempArr[1]);
                    inventory.splice(tempIndex, 1);
                }
                break;
            case "Bonus phone":
                let switchPhonesArr = tempArr[1].split(":")
                if (inventory.includes(switchPhonesArr[0])) {
                    let tempIndex = inventory.indexOf(switchPhonesArr[0]);
                    inventory.splice(tempIndex+1, 0, switchPhonesArr[1])
                }
                break;
            case "Last":
                if (inventory.includes(tempArr[1])) {
                    let tempIndex = inventory.indexOf(tempArr[1]);
                    let tempPhone = inventory.splice(tempIndex, 1);
                    inventory.push(tempPhone);
                }
                break;
        }
    }
    console.log(inventory.join(", "));
}




phoneShop((["SamsungA50, MotorolaG5, IphoneSE",

    "Add - Iphone10",
    "Add - XiaomiNote",

    "Remove - IphoneSE",
    "Last - Iphone10",
    "Bonus phone - XiaomiNote:Iphone5",

    "End"]))