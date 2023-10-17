function solve(arr){
    let filter = /.*?%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<quant>\d+.?)\|.*?(?<price>[\d]+.?\d*)\$.*?/mg;
    let income = 0;
    let i = 0;
    let line = arr[i]
    while (line !== "end of shift"){
        let match = [...line.matchAll(filter)];
        for (const a of match) {
            let price = Number(a.groups.quant)*Number(a.groups.price)
            console.log(`${a.groups.name}: ${a.groups.product} - ${price.toFixed(2)}`)
            income+=price;
        }
        i++;
        line = arr[i];
    }
    console.log(`Total income: ${income.toFixed(2)}`)
}

solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gumem>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift',
'%Maria%<Cola>|1|2.4$']
)