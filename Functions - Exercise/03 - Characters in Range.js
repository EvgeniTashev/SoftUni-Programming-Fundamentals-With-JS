function char(firstChar, secondChar) {

    let firstCharNum = firstChar.charCodeAt();
    let secondCharNum = secondChar.charCodeAt();
    let charString = "";
    let lowNum = 0;
    let highNum = 0;

    if (firstCharNum < secondCharNum) {

        lowNum = firstCharNum + 1;
        highNum = secondCharNum;
    }

    else {

        lowNum = secondCharNum + 1;
        highNum = firstCharNum;
    }

    for (i = lowNum; i < highNum; ++i) {

        charString += `${String.fromCharCode(i)} `;
    }

    console.log(charString);

}
char("3", "%")