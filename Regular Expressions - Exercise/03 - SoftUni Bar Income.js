function solve(arr){
    let filter = /.*?%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<quant>\d+.?)\|.*?(?<price>[\d]+.?\d*)\$.*?/mg;
    let income = 0;
    for (const a of arr) {   
        if(a==="end of shift"){
            console.log(`Total income: ${income.toFixed(2)}`);
            break;
        }
        let pattern = filter.exec(a);
        if(pattern){
            let tempMath = (Number(pattern.groups["quant"])*Number(pattern.groups["price"])).toFixed(2)
            console.log(`${pattern.groups["name"]}: ${pattern.groups["product"]} - ${tempMath}`)
            income += Number(tempMath);         
        pattern = filter.exec(a);
        }
    }
}

solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gumem>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift',
'%Maria%<Cola>|1|2.4$']
)