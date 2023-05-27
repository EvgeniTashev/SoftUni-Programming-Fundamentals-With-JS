function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armourCount = 0;
    for (fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            helmetCount++;
        }
        if (fight % 3 === 0) {
            swordCount++;
        }
        if (fight % 6 === 0) {
            shieldCount++;
        }
        if (fight % 12 === 0) {
            armourCount++;
        }
    }
    total = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armourCount * armourPrice
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}