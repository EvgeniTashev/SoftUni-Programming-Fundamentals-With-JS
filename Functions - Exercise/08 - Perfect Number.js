function perfNum(num) {

    let divisorSum = 0;

    for (i = 1; i <= Math.ceil(num / 2); i++) {

        if (num % i === 0) {

            divisorSum += i;
        }
    }

    if (divisorSum === num) {

        console.log("We have a perfect number!")
    }

    else {

        console.log("It's not so perfect.")
    }

}