function huntingGames(noTouchyTouchy) {

    let arr = noTouchyTouchy.slice(0);
    let days = Number(arr.shift());
    let playerNumbers = Number(arr.shift());
    let totalEnergy = Number(arr.shift());
    let dailyWaterIntake = Number(arr.shift());
    let dailyFoodIntake = Number(arr.shift());
    let totalWater = dailyWaterIntake * days * playerNumbers;
    let totalFood = dailyFoodIntake * days * playerNumbers;
    let hasEnergy = true;
    let currentDay = 1;
    arr = arr.map(Number);

    for (i = 0; i < days; i++) {

        if (!hasEnergy) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
            return;
        }

        dailyRoutine(arr[i]);
        currentDay++;
    }
    if (totalEnergy >= 0) {

        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`)
    }

    function dailyRoutine(q) {

        totalEnergy -= q; 
        if (totalEnergy <= 0) {
            hasEnergy = false;
            return;
        }       

        if (currentDay % 2 === 0) {
            totalWater *= 0.7;
            totalEnergy *= 1.05;
        }

        if (currentDay % 3 === 0) {
            totalFood -= (totalFood / playerNumbers);
            totalEnergy *= 1.1;
        }
        
        return;
    }
}




huntingGames((["10", "1000", "50000", "1000", "1000", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]))
console.log("---------------")
huntingGames((["12", "6", "4430", "9.8", "5.5", "620.3", "840.2", "960.1", "220", "340", "674", "365", "345.5", "212", "412.12", "258", "496"]))