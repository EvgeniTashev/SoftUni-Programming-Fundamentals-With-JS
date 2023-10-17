function orders(drink, num) {
    let price = 0;

    switch (drink) {

        case "coffee":
            price = 1.5;
            break;

        case "water":
            price = 1;
            break;

        case "snacks":
            price = 2;
            break;

        case "coke":
            price = 1.4;
            break;
    }

    let finalPrice = price * num;

    console.log(finalPrice.toFixed(2));

}