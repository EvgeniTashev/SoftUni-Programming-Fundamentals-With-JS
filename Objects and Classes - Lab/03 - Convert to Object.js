function solve(str){
    let newStr = JSON.parse(str);
    for (let key of Object.keys(newStr)){
        console.log(`${key}: ${newStr[key]}`)
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')