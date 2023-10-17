function solve(arr) {
    let schedule = {};
    for (let a of arr) {
        let [day, name] = a.split(" ");
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            console.log(`Scheduled for ${day}`)
            schedule[day] = name;
        }
    }
    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`)

    }

}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])