function solve(arr){
    let book = {};
    for (let a of arr) {
        let [name, adress] = a.split(":");
            book[name] = adress;
    }
    let sortedBook = Object.entries(book).sort((a,b) => a[0].localeCompare(b[0]))//.reduce((val, key) => {val[key] = book[key]; return val;}, {})
    for (let [key,value] of sortedBook) {
        console.log(`${key} -> ${value}`)

    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])