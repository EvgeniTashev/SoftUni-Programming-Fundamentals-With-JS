function password(input) {

    let username = input[0];

    for (index = 1; index < input.length; index++) {

        let passTest = input[index].split("");
        passTest = passTest.reverse();
        passTest = passTest.join("");

        if (username == passTest) {

            console.log(`User ${username} logged in.`);
            return;

        }

        else if (index == 4) {
            console.log(`User ${username} blocked!`);
            return;

        }

        else {

            console.log(`Incorrect password. Try again.`)

        }

    }

}