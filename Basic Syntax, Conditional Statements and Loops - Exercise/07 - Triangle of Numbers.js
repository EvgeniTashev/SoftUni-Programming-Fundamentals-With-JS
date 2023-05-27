function solve(i) {
    let print = ``;
    for(n = 1; n <= i; n++){
        let x = n;
        while (x >= 1){
            print += `${n} `;
            x--;
        }
        console.log(print);
        print = ``;
    }    
}