function solve(arr){
    let pattern = />>(?<name>\w*)<<(?<price>\d*.?\d*)!(?<quant>\d*)\b/mg;
    let result = pattern.exec(arr)
    console.log(result.groups)
    
}
solve('>>Sofa<<312.23!3')