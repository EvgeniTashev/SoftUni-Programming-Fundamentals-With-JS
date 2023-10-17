function LatLet(num) {
    for (c = 0; c < num; c++) {
        let letterC = String.fromCharCode(97 + c);
        for (b = 0; b < num; b++) {
            let letterB = String.fromCharCode(97 + b);
            for (a = 0; a < num; a++) {
                let letterA = String.fromCharCode(97 + a);
                console.log(`${letterC}${letterB}${letterA}`);
            }
        }
    }
}
