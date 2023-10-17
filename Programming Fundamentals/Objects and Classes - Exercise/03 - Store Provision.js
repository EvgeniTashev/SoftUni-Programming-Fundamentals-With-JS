function solve(stockArr, orderArr){

    let stock = {};

    for (i = 0; i < stockArr.length; i+=2){
        stock[stockArr[i]] = Number(stockArr[i+1]);
    }
    for (i = 0; i < orderArr.length; i+=2){
        if (stock.hasOwnProperty(orderArr[i])){
            stock[orderArr[i]] += Number(orderArr[i+1]);
        }
        else {
            stock[orderArr[i]] = Number(orderArr[i+1]);
        }
    }
    for (let x in stock){
        console.log(`${x} -> ${stock[x]}`)
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )