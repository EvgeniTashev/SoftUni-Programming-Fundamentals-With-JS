function spice(yield) {
    const ration = 26;
    let day = 0;
    let storage = 0;
    while (yield >= 100) {
        storage += yield;
        yield -= 10;
        day++;
        if (storage >= ration) {
            storage -= ration;
        }
        else {
            storage = 0;
        }        
    }
    storage >= ration ? storage -= ration : storage = 0;
    console.log(day);
    console.log(storage);
}