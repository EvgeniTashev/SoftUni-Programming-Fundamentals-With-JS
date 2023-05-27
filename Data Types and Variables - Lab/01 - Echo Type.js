function solve(x) {
    console.log(typeof (x));
    if (typeof (x) === "string" || typeof (x) === "number") {
        console.log(x);
    }
    else {
        console.log(`Parameter is not suitable for printing`);
    }
}