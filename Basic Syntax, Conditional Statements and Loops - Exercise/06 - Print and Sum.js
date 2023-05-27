function solve(i, x) {
    let sum = 0;
    let result = ``;
    while (i <= x) {
        sum += i;
        result += `${i} `;
        i++;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}