function taxCalc(input) {
    let arr = input[0].split(">>");
    let tax = 0;
    let totalTax = 0;
    for (i = 0; i < arr.length; i++) {
        let tempArr = arr[i].split(" ");
        let carType = tempArr.shift();
        tempArr = tempArr.map(Number);
        switch (carType) {
            case "family": 
                tax = 50 - (tempArr[0]*5) + (Math.floor(tempArr[1]/3000)*12)
                totalTax += tax;
                console.log(`A family car will pay ${tax.toFixed(2)} euros in taxes.`)
                break;
            case "heavyDuty":                
                tax = 80 - (tempArr[0]*8) + (Math.floor(tempArr[1]/9000)*14)
                totalTax += tax;
                console.log(`A heavyDuty car will pay ${tax.toFixed(2)} euros in taxes.`)
                break;
            case "sports":
                tax = 100 - (tempArr[0]*9) + (Math.floor(tempArr[1]/2000)*18)
                totalTax += tax;
                console.log(`A sports car will pay ${tax.toFixed(2)} euros in taxes.`)
                break;
            default: console.log("Invalid car type.");
        }

    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`)
}



taxCalc((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']))