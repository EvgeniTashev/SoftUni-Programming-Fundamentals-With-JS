function solve(arr) {
    let storage = new Map();
    for (let a of arr) {
        let [item, number] = a.split(" ");
        if (storage.has(item)) {
            storage.set(item, storage.get(item) + Number(number));
        }
        else {
            storage.set(item, Number(number));
        }
    }
    for (let [key, value] of storage.entries()) {
        console.log(`${key} -> ${value}`)

    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])