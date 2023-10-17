function solve(arr) {
    let number = Number(arr.shift());
    let pattern = regex = /(.+)>(?<one>\d{3})\|(?<two>[a-z]{3})\|(?<three>[A-Z]{3})\|(?<four>[^<>]{3})<\1/;
    for (i = 0; i < number; i++) {
        let tempEl = pattern.exec(arr[i]);
        encPass = "Password: ";
        if (tempEl) {
            let testText = arr[i].split(/[><]/);
            if (testText[0] === testText[testText.length - 1]) {
                encPass = encPass.concat(`${tempEl.groups.one}${tempEl.groups.two}${tempEl.groups.three}${tempEl.groups.four}`)
                console.log(encPass)
            }
            else {
                console.log("Try another password!")
            }
        }
        else {
            console.log("Try another password!")
        }
    };

}
solve((["5",

    "aa>111|mqu|BAU|mqu<aa",

    "()>111!aaa!AAA!^&*<()",

    "o>088|abc|AAA|***<o",

    "asd>asd|asd|ASD|asd<asd",

    "asd>asd|asd|ASD|asd<asd",

    "asd>asd|asd|ASD|asd<asd",

    "*>088|zzzz|ZzZ|123<*"]));