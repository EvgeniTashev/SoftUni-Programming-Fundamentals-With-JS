function passwordValidator(arr) {
    let password = arr.shift();
    let modifiers = {
        "Make Upper": (password, index) => {
            index = Number(index);
            if (password[index].match((/[a-z]/))) {
                let tempPass = password.split("");
                tempPass[index] = tempPass[index].toUpperCase();
                password = tempPass.join("");
            }
            console.log(password);
            return password;
        },
        "Make Lower": (password, index) => {
            index = Number(index);
            if (password[index].match((/[A-Za-z]/))) {
                let tempPass = password.split("");
                tempPass[index] = tempPass[index].toLowerCase();
                password = tempPass.join("");
            }
            console.log(password);
            return password;
        },
        "Insert": (password, index, char) => {
            let tempPass = password.split("");
            tempPass.splice(Number(index), 0, char);
            password = tempPass.join("");
            console.log(password);
            return password;
        },
        "Replace": (password, char, value) => {
            let target = char.charCodeAt(0);
            let replacement = target + Number(value)
            let tempPass = password.split("")
            for (i = 0; i<tempPass.length; i++) {
                if (tempPass[i] === char) {
                    tempPass[i] = String.fromCharCode(replacement)
                }               
            }      
            password = tempPass.join("")
            //password = password.replace(re, String.fromCharCode(replacement));//questionable
            console.log(password);
            return password;
        },
        "Validation": (password) => {
            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
                return password;
            }
            if (password.match(/[^\w]/)) {
                console.log("Password must consist only of letters, digits and _!");
                return password;
            }
            if (!password.match(/[A-Z]/)) {
                console.log("Password must consist at least one uppercase letter!");
                return password;
            }
            if (!password.match(/[a-z]/)) {
                console.log("Password must consist at least one lowercase letter!");
                return password;
            }
            if (!password.match(/\d/)) {
                console.log("Password must consist at least one digit!");
                return password;
            }

        }

    }
    for (const element of arr) {
        if(element === "Complete"){
            break;
        }
        let [command, ...tokens] = element.split(" ");
            if (command === "Make") {
                command = command.concat(` ${tokens[0]}`)
                tokens.shift();
            }
            if (modifiers.hasOwnProperty(command)) {
                password = modifiers[command](password, ...tokens);
            }        
    }
    // arr.forEach(element => {
    //     if (element !== "Complete") {
    //         let [command, ...tokens] = element.split(" ");
    //         if (command === "Make") {
    //             command = command.concat(` ${tokens[0]}`)
    //             tokens.shift();
    //         }
    //         if (modifiers.hasOwnProperty(command)) {
    //             password = modifiers[command](password, ...tokens);
    //         }
    //     }

    // });

}

passwordValidator(['123r456789',

'Make Upper 3',
'Insert 3 R',

'Replace 5 15',

'Validation',

'Make Upper 3',
'Make Lower 3',

'Make Upper 3',
'Complete',
,])