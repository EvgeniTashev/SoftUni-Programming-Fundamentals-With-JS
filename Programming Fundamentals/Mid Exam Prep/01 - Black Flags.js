function solve(arr) {
    
    let [days, dailyPlunder, expectedPlunder] = arr.map(Number);
    let gatheredPlunder = 0;

    for (i = 1; i <= days; i++) {

        gatheredPlunder += dailyPlunder;

        if (i % 3 === 0) {

            gatheredPlunder += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {

            gatheredPlunder *= 0.7;
        }

    }

    let percentage = ((gatheredPlunder / expectedPlunder) * 100).toFixed(2);

    if (gatheredPlunder >= expectedPlunder) {

        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`)
    }

    else {

        console.log(`Collected only ${percentage}% of the plunder.`)
    }
}