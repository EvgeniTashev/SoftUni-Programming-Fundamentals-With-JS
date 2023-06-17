function loading(num) {

    let barFilling = 10;
    let loadingBar = `${num}% [`;

    if (num === 100) {

        console.log("100% Complete!");
    }

    else {

        loadedCount(num);
        loadingLeft(barFilling);
        
        loadingBar += "]";
        console.log(loadingBar);
        console.log("Still loading...")
    }

    function loadedCount(a) {

        for (i = 0; i < a; i += 10) {
            loadingBar += "%";
            barFilling--;
        }

    }

    function loadingLeft(b) {

        for (x = 0; x < barFilling; x++) {
            loadingBar += ".";
        }

    }

}
