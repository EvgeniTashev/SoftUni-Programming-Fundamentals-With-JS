function rightPlace(missing, fix, target) {
    let test = missing.replace('_', fix);
    let result = test === target ? "Matched" : "Not Matched";
    console.log(result);
}