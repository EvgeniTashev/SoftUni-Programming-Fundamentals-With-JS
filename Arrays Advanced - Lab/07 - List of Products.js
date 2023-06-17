function solve(arr) {

    arr.sort();

    arr.map((a, i) => console.log(`${i + 1}.${a}`));
}