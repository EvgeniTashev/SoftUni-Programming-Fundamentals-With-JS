function sum(num) {

    num = num.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (i = 0; i < num.length; i++) {

        let indexNum = Number(num[i]);
        mathStuff(indexNum);

    }

    function mathStuff(a) {

        if (a % 2 === 0) {

            evenSum += a;
            return evenSum;
        }

        else {

            return oddSum += a;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}