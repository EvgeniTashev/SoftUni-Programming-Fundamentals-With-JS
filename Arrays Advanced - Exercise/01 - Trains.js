function solve(arr) {

    let wagons = arr.shift().split(" ").map(Number);
    let capacity = Number(arr.shift());

    for (i = 0; i < arr.length; i++) {

        let command = arr[i].split(" ");

        if (command[0] === "Add") {

            wagons.push(Number(command[1]));
        }

        else {

            addPassangers(Number(command[0]))
        }

    }

    console.log(wagons.join(" "));

    function addPassangers(a) {

        for (y = 0; y < wagons.length; y++) {

            if (wagons[y] + a <= capacity) {

                wagons[y] += a;
                return;
            }
        }
    }
}