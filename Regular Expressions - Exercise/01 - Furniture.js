function solve(arr){
    let pattern = />>(?<name>\w+)<<(?<price>\d+.?\d*)!(?<quant>\d+)\b/mg;
    console.log("Bought furniture:")
    let money = 0;
    let fullList = arr.join(" ");
           
    let temp = pattern.exec(fullList)
    while (temp){ 
        console.log(temp.groups['name'])
        money += (temp.groups["price"]*temp.groups["quant"])
        temp = pattern.exec(fullList)
    // for (let a of arr) {        
    //     if(a !== "Purchase"){            
    //     let temp = pattern.exec(a)
    //         while (temp){ 
    //             console.log(temp.groups['name'])
    //             money += (temp.groups["price"]*temp.groups["quant"])
    //             temp = pattern.exec(a)
    //         }
    //     }        
    }
    money === 0? console.log('Total money spend: 0.00'):console.log(`Total money spend: ${money.toFixed(2)}`)

}

solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])