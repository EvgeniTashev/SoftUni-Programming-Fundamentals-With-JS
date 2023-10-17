function solve(num, type, day) {
    let price;
    if (type == `Students`) {
        switch (day) {
            case `Friday`:
                price = 8.45 * num;
                break
            case `Saturday`:
                price = 9.80 * num;
                break;
            case `Sunday`:
                price = 10.46 * num;
                break;
        }
        if (num > 29) {
            price = price * 0.85;
        }
    }
    else if (type == `Business`) {
        switch (day) {
            case `Friday`:
                price = 10.90;
                break;
            case `Saturday`:
                price = 15.60;
                break;
            case `Sunday`:
                price = 16;
                break;
        }
        let discount = 10 * price;
        price = price * num;
        if (num > 99) {
            price = price - discount;
        }
    }
    else {
        switch (day) {
            case `Friday`:
                price = 15 * num;
                break;
            case `Saturday`:
                price = 20 * num;
                break;
            case `Sunday`:
                price = 22.50 * num;
                break;
        }
        if (num > 9 && num < 21) {
            price = price * 0.95;
        }
    }
    console.log(`Total price: ${(price.toFixed(2))}`)
}