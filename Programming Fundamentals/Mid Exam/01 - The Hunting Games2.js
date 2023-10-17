function test(arr){
    let days = 1;
    let energy = Number(arr[2]);
    let food = Number(arr[0])*Number(arr[1])*Number(arr[4]);
    let water = Number(arr[0])*Number(arr[1])*Number(arr[3]);
    for (i = 0; i < Number(arr[0]); i++){
        let dailyEnergy = Number(arr[5+i]);
        energy = energy - dailyEnergy;
        if(energy <= 0){
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
            return;
        }
        if (days % 2 === 0){
            water = water*0.7;
            energy = energy*1.05;
        }
        if (days % 3 === 0){
            food = food - (food/Number(arr[1]));
            energy = energy*1.1;
        }
        days++;
    }
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
}
test((["10","7","5035.5","11.3","7.2","942.3","500.57","520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]))
console.log("---------------")
test((["12", "6", "4430", "9.8", "5.5", "620.3", "840.2", "960.1", "220", "340", "674", "365", "345.5", "212", "412.12", "258", "496"]))