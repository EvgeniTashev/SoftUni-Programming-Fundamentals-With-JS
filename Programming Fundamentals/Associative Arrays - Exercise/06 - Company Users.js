function solve(arr){
    let companies = {};
    arr.forEach(x => {  
        let [name, id] = x.split(" -> ");
        if(!companies.hasOwnProperty(name)){
            companies[name] = [];
        }    
        companies[name].push(id);
    });

    let sortedComp = Object.entries(companies);
    sortedComp.sort((a,b)=>a[0].localeCompare(b[0]));

    for (const a of sortedComp) {   
        console.log(a[0]);
        let fix = new Set(a[1]);
        for (const b of fix) {
            console.log(`-- ${b}`)            
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    
    
    ]
    )