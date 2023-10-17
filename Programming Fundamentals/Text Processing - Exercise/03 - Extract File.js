function solve(text){
    let arr = text.split("\\");
    let id = arr.length-1;
    let seperator = arr[id].lastIndexOf(".");
    console.log(`File name: ${arr[id].slice(0, seperator)}`);
    console.log(`File extension: ${arr[id].slice(seperator+1)}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx')