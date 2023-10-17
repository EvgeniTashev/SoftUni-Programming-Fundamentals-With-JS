function sum(arr) {

    let result = 0;

    if (arr.length === 1) {

        result = (Number(arr[0]));
    }

    else {

        result = Number(arr.shift()) + Number(arr.pop());
    }

    console.log(result);

}