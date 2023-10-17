function specialNum(num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        i = i.toString();
        let x = 0;
        while (x < i.length) {
            sum += Number(i[x]);
            x++;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }
        else { console.log(`${i} -> False`) }
        Number.i++;
        sum = 0;
    }
}
