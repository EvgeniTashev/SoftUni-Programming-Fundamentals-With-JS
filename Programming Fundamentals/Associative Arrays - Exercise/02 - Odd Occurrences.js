function solve(input) {
    let counter = {};
    let arr = input.split(" ").map(x => x.toLowerCase());
    for (let a of arr) {
        if (!counter.hasOwnProperty(a)) {
            counter[a] = 1;
        }
        else {
            counter[a] += 1;
        }
    }
    let stepArray = Object.entries(counter).filter(x => x[1]%2!==0).sort((a,b) => b[1]-a[1]);
    let result = "";
    for (let key of stepArray) {
        result += `${key[0]} `;
    }
    console.log(result);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')